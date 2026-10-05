import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from 'playwright';

const host = '127.0.0.1';
const port = 4321;
const origin = `http://${host}:${port}`;
const outputDir = resolve('artifacts/screenshots');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const routes = [
  ['home', '/'],
  ['home-cleaning', '/residential-cleaning/'],
  ['deep-cleaning', '/deep-cleaning/'],
  ['move-cleaning', '/move-out-cleaning/'],
  ['vacation-rentals', '/vacation-rental-cleaning/'],
  ['commercial', '/commercial-cleaning/'],
  ['service-area', '/service-area/'],
  ['about', '/about/'],
  ['faq', '/faq/'],
  ['quote', '/quote/'],
  ['quote-success', '/quote-success/'],
  ['404', '/404/'],
];

const viewports = [
  ['mobile', { width: 375, height: 812 }],
  ['tablet', { width: 768, height: 1024 }],
  ['desktop', { width: 1440, height: 1000 }],
];

const preview = spawn(
  npmCommand,
  ['run', 'preview', '--', '--host', host, '--port', String(port)],
  { stdio: ['ignore', 'pipe', 'pipe'] },
);

let previewError = '';
preview.stderr.on('data', (chunk) => { previewError += chunk.toString(); });

const stopPreview = () => {
  if (!preview.killed) preview.kill();
};
process.on('SIGINT', () => { stopPreview(); process.exit(130); });
process.on('SIGTERM', () => { stopPreview(); process.exit(143); });

async function waitForServer(timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (preview.exitCode !== null) {
      throw new Error(`Astro preview exited early.\n${previewError}`);
    }
    try {
      const response = await fetch(origin, { redirect: 'manual' });
      if (response.status < 500) return;
    } catch {
      // Preview is still starting.
    }
    await new Promise((resolvePromise) => setTimeout(resolvePromise, 250));
  }
  throw new Error(`Timed out waiting for ${origin}`);
}

let browser;
try {
  await mkdir(outputDir, { recursive: true });
  await waitForServer();
  browser = await chromium.launch();

  for (const [viewportName, viewport] of viewports) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    for (const [name, route] of routes) {
      const url = new URL(route, origin).toString();
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.screenshot({
        path: resolve(outputDir, `${name}-${viewportName}.png`),
        fullPage: true,
      });
    }

    await context.close();
  }

  console.log(`Saved screenshots to ${outputDir}`);
} finally {
  if (browser) await browser.close();
  stopPreview();
}
