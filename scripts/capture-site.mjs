#!/usr/bin/env node
import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const siteIndex = args.indexOf('--site');
const siteName = siteIndex === -1 ? '.' : args[siteIndex + 1];
const repo = siteName === 'island-astro' ? path.join(root, siteName) : root;
const dist = path.join(repo, 'dist');
const screenshots = path.join(repo, 'screenshots');
const help = `Capture every built HTML page at desktop and mobile widths.\n\nUsage:\n  npm run screenshots                  Build and capture the root site\n  npm run screenshots:island           Build and capture island-astro\n  node scripts/capture-site.mjs [--site island-astro] [--doctor | --dry-run]\n\nImages and manifest: <selected site>/screenshots/<UTC timestamp>/\nExisting captures are never overwritten.\n`;

if (args.includes('--help') || args.includes('-h')) {
  process.stdout.write(help);
  process.exit(0);
}
const options = siteIndex === -1 ? args : args.filter((_, index) => index !== siteIndex && index !== siteIndex + 1);
if ((siteIndex !== -1 && (siteName !== 'island-astro' || args.lastIndexOf('--site') !== siteIndex)) ||
    options.some((arg) => !['--doctor', '--dry-run'].includes(arg)) || options.length > 1) {
  process.stderr.write('Unknown or conflicting arguments. Run with --help.\n');
  process.exit(2);
}

const browserPath = chromium.executablePath();
if (args.includes('--doctor')) {
  const result = { playwright: 'available', browser: existsSync(browserPath) ? 'available' : 'missing', browserPath, dist: existsSync(dist) ? 'available' : 'missing' };
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  process.exit(result.browser === 'available' ? 0 : 1);
}

const mime = {
  '.css': 'text/css', '.html': 'text/html; charset=utf-8', '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.js': 'text/javascript',
  '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.woff': 'font/woff', '.woff2': 'font/woff2',
};

async function htmlFiles(dir, prefix = '') {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const relative = path.join(prefix, entry.name);
    if (entry.isDirectory()) result.push(...await htmlFiles(path.join(dir, entry.name), relative));
    else if (entry.isFile() && entry.name.endsWith('.html')) result.push(relative);
  }
  return result.sort();
}

function routeFor(relative) {
  const route = relative.split(path.sep).join('/');
  if (route === 'index.html') return '/';
  if (route.endsWith('/index.html')) return `/${route.slice(0, -'index.html'.length)}`;
  return `/${route}`;
}

function imageName(relative, viewport) {
  const stem = relative.replace(/\.html$/, '').split(path.sep).join('--');
  return `${stem}-${viewport}.png`;
}

async function serve() {
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url, 'http://localhost');
      const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
      let target = path.resolve(dist, relative);
      if (target !== dist && !target.startsWith(`${dist}${path.sep}`)) {
        response.writeHead(403).end();
        return;
      }
      if (url.pathname.endsWith('/')) target = path.join(target, 'index.html');
      const content = await readFile(target);
      response.writeHead(200, { 'content-type': mime[path.extname(target)] ?? 'application/octet-stream' });
      response.end(content);
    } catch (error) {
      response.writeHead(error.code === 'ENOENT' || error.code === 'EISDIR' ? 404 : 500).end();
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  return server;
}

let browser;
let server;
try {
  if (!existsSync(dist)) throw new Error('dist/ is missing. Run npm run screenshots to build and capture the site.');
  const files = await htmlFiles(dist);
  if (!files.length) throw new Error('dist/ has no HTML pages. Run npm run screenshots to rebuild the site.');
  const pages = files.map((file) => ({ file, route: routeFor(file) }));
  if (args.includes('--dry-run')) {
    process.stdout.write(`${JSON.stringify({ pages, viewports: ['desktop', 'mobile'] }, null, 2)}\n`);
    process.exit(0);
  }
  if (!existsSync(browserPath)) throw new Error('Chromium is missing. Run npx playwright install chromium.');

  server = await serve();
  browser = await chromium.launch({ headless: true });
  const origin = `http://127.0.0.1:${server.address().port}`;
  const runName = new Date().toISOString().replace(/[:.]/g, '-');
  const outputDir = path.join(screenshots, runName);
  await mkdir(screenshots, { recursive: true });
  await mkdir(outputDir, { recursive: false });
  const manifest = { createdAt: new Date().toISOString(), pages: [], errors: [] };
  const viewports = [
    { name: 'desktop', width: 1440, height: 900, isMobile: false },
    { name: 'mobile', width: 390, height: 844, isMobile: true },
  ];

  for (const { file, route } of pages) {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, isMobile: viewport.isMobile, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      try {
        const page = await context.newPage();
        const response = await page.goto(`${origin}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
        if (!response?.ok()) throw new Error(`HTTP ${response?.status() ?? 'no response'}`);
        await page.evaluate(async () => {
          const images = [...document.images];
          for (const image of images) image.loading = 'eager';
          let timeout;
          try {
            await Promise.race([
              Promise.all([
                document.fonts.ready,
                ...images.map(async (image) => {
                  try {
                    await image.decode();
                  } catch {
                    throw new Error(`Image failed to load: ${image.currentSrc || image.src}`);
                  }
                }),
              ]),
              new Promise((_, reject) => {
                timeout = setTimeout(() => reject(new Error('Timed out waiting for fonts and images')), 15000);
              }),
            ]);
          } finally {
            clearTimeout(timeout);
          }
          const bar = document.querySelector('.mobile-action-bar');
          if (bar) bar.style.position = 'static';
          const header = document.querySelector('.header');
          if (header) header.style.position = 'static';
          window.scrollTo(0, 0);
        });
        const filename = imageName(file, viewport.name);
        await page.screenshot({ path: path.join(outputDir, filename), fullPage: true, animations: 'disabled', timeout: 30000 });
        manifest.pages.push({ route, viewport: viewport.name, width: viewport.width, height: viewport.height, file: filename });
      } catch (error) {
        manifest.errors.push({ route, viewport: viewport.name, error: error.message });
      } finally {
        await context.close();
      }
    }
  }
  await writeFile(path.join(outputDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  process.stdout.write(`${JSON.stringify({ outputDir, ...manifest }, null, 2)}\n`);
  if (manifest.errors.length) process.exitCode = 1;
} catch (error) {
  process.stderr.write(`Screenshot capture failed: ${error.message}\n`);
  process.exitCode = 1;
} finally {
  await browser?.close();
  if (server) await new Promise((resolve) => server.close(resolve));
}
