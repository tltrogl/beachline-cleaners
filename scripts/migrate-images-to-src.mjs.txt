#!/usr/bin/env node

import {
  access,
  copyFile,
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dryRun = process.argv.includes('--dry-run');

const publicImagesDir = path.join(root, 'public', 'images');
const srcImagesDir = path.join(root, 'src', 'assets', 'images');
const siteImagePath = path.join(root, 'src', 'components', 'SiteImage.astro');
const srcDir = path.join(root, 'src');

const imageExtensions = new Set([
  '.avif',
  '.gif',
  '.jpeg',
  '.jpg',
  '.png',
  '.svg',
  '.webp',
]);

const log = (...args) =>
  console.log(dryRun ? '[dry-run]' : '[migrate]', ...args);

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  if (!(await exists(dir))) return [];

  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walk(full));
    } else {
      files.push(full);
    }
  }

  return files;
}

async function sameFileContents(a, b) {
  const [left, right] = await Promise.all([
    readFile(a),
    readFile(b),
  ]);

  return left.equals(right);
}

async function moveImages() {
  if (!(await exists(publicImagesDir))) {
    log('public/images does not exist; skipping physical move.');
    return { moved: 0, skipped: 0 };
  }

  const files = (await walk(publicImagesDir))
    .filter((file) =>
      imageExtensions.has(path.extname(file).toLowerCase())
    );

  let moved = 0;
  let skipped = 0;

  for (const source of files) {
    const relative = path.relative(publicImagesDir, source);
    const destination = path.join(srcImagesDir, relative);

    if (await exists(destination)) {
      if (!(await sameFileContents(source, destination))) {
        throw new Error(
          `Refusing to overwrite a different file:\n  ${destination}\n` +
          `Resolve the collision manually, then rerun the script.`
        );
      }

      log(`Already present: src/assets/images/${relative}`);

      if (!dryRun) {
        await rm(source);
      }

      skipped++;
      continue;
    }

    log(
      `Move: public/images/${relative} -> src/assets/images/${relative}`
    );

    if (!dryRun) {
      await mkdir(path.dirname(destination), { recursive: true });

      try {
        await rename(source, destination);
      } catch (error) {
        if (error?.code !== 'EXDEV') throw error;

        await copyFile(source, destination);
        await rm(source);
      }
    }

    moved++;
  }

  if (!dryRun && await exists(publicImagesDir)) {
    const leftovers = await readdir(publicImagesDir);

    if (leftovers.length === 0) {
      await rm(publicImagesDir, { recursive: true });
    }
  }

  return { moved, skipped };
}

const siteImageComponent = `---
import { Image } from 'astro:assets';
import type { ImageMetadata } from 'astro';

interface Props {
  src: string | ImageMetadata;
  alt: string;
  [key: string]: unknown;
}

const props = Astro.props as Props;
const { src, ...rest } = props;

const localImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{avif,gif,jpeg,jpg,png,svg,webp}',
  { eager: true }
);

let resolvedSrc: string | ImageMetadata = src;

if (typeof src === 'string') {
  const marker = '/images/';
  const markerIndex = src.indexOf(marker);

  if (markerIndex !== -1) {
    const relativePath = decodeURI(
      src.slice(markerIndex + marker.length)
    ).replace(/^\\\\/+/, '');

    const key = \`/src/assets/images/\${relativePath}\`;
    const module = localImages[key];

    if (!module) {
      throw new Error(
        \`SiteImage could not resolve "\${src}". Expected local asset: \${key}\`
      );
    }

    resolvedSrc = module.default;
  }
}

const imageProps = {
  ...rest,
  src: resolvedSrc,
} as any;
---

<Image {...imageProps} />
`;

async function createSiteImageComponent() {
  if (await exists(siteImagePath)) {
    const current = await readFile(siteImagePath, 'utf8');

    if (current === siteImageComponent) {
      log('SiteImage.astro already up to date.');
      return false;
    }

    log('Update: src/components/SiteImage.astro');
  } else {
    log('Create: src/components/SiteImage.astro');
  }

  if (!dryRun) {
    await mkdir(path.dirname(siteImagePath), {
      recursive: true,
    });

    await writeFile(
      siteImagePath,
      siteImageComponent,
      'utf8'
    );
  }

  return true;
}

function toImportPath(fromFile, targetFile) {
  let relative = path
    .relative(path.dirname(fromFile), targetFile)
    .split(path.sep)
    .join('/');

  if (!relative.startsWith('.')) {
    relative = `./${relative}`;
  }

  return relative;
}

function addAstroImport(source, importLine) {
  if (source.includes(importLine)) {
    return source;
  }

  if (source.startsWith('---')) {
    const firstNewline = source.indexOf('\n');

    return (
      `${source.slice(0, firstNewline + 1)}` +
      `${importLine}\n` +
      `${source.slice(firstNewline + 1)}`
    );
  }

  return `---\n${importLine}\n---\n${source}`;
}

async function rewriteAstroImages() {
  const astroFiles = (await walk(srcDir))
    .filter((file) => file.endsWith('.astro'))
    .filter(
      (file) =>
        path.resolve(file) !== path.resolve(siteImagePath)
    );

  let changed = 0;

  for (const file of astroFiles) {
    const original = await readFile(file, 'utf8');

    if (!/<img\b/.test(original)) {
      continue;
    }

    const importPath = toImportPath(
      file,
      siteImagePath
    );

    const importLine =
      `import SiteImage from '${importPath}';`;

    let updated = original.replace(
      /<img\b/g,
      '<SiteImage'
    );

    updated = addAstroImport(
      updated,
      importLine
    );

    if (updated !== original) {
      const relative = path
        .relative(root, file)
        .split(path.sep)
        .join('/');

      log(`Rewrite <img>: ${relative}`);

      if (!dryRun) {
        await writeFile(
          file,
          updated,
          'utf8'
        );
      }

      changed++;
    }
  }

  return changed;
}

async function auditReferences() {
  const sourceFiles = (await walk(srcDir))
    .filter((file) =>
      /\.(astro|css|js|mjs|ts|tsx|jsx)$/.test(file)
    );

  const warnings = [];

  for (const file of sourceFiles) {
    const text = await readFile(file, 'utf8');
    const lines = text.split(/\r?\n/);

    lines.forEach((line, index) => {
      if (!line.includes('/images/')) {
        return;
      }

      const looksLikeCssUrl =
        /url\([^)]*\/images\//.test(line);

      const looksLikeMetaOrLink =
        /(?:href|content)\s*=\s*["'{`][^"'`]*\/images\//.test(line);

      if (looksLikeCssUrl || looksLikeMetaOrLink) {
        warnings.push(
          `${path.relative(root, file)
            .split(path.sep)
            .join('/')}:${index + 1}: ${line.trim()}`
        );
      }
    });
  }

  return warnings;
}

async function main() {
  const packagePath = path.join(
    root,
    'package.json'
  );

  if (!(await exists(packagePath))) {
    throw new Error(
      'Run this script from the Astro project root (package.json not found).'
    );
  }

  log('Starting Beachline image migration.');

  const moveResult = await moveImages();

  await createSiteImageComponent();

  const rewritten =
    await rewriteAstroImages();

  const warnings =
    await auditReferences();

  console.log('');
  console.log('Migration summary');
  console.log(
    `  images moved: ${moveResult.moved}`
  );
  console.log(
    `  duplicate images removed from public: ${moveResult.skipped}`
  );
  console.log(
    `  Astro files changed: ${rewritten}`
  );

  if (warnings.length) {
    console.log('');
    console.log(
      'Review these /images/ references manually (CSS/meta/link context):'
    );

    for (const warning of warnings) {
      console.log(`  ${warning}`);
    }
  }

  console.log('');

  if (dryRun) {
    console.log(
      'Dry run only. No files were changed.'
    );
    console.log(
      'Run again without --dry-run to apply the migration.'
    );
  } else {
    console.log(
      'Next: npm run typecheck && npm run build'
    );
  }
}

main().catch((error) => {
  console.error('');
  console.error(
    error?.stack || error
  );
  process.exitCode = 1;
});