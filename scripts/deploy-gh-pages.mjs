import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, cpSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';

console.log('--- Step 1: Building Astro project ---');
execSync('npm run build', { stdio: 'inherit' });

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const noJekyllPath = path.join(distDir, '.nojekyll');

if (!existsSync(noJekyllPath)) {
  writeFileSync(noJekyllPath, '');
}

console.log('--- Step 2: Preparing staging directory for gh-pages ---');
const stageDir = path.join(tmpdir(), `deploy-gh-pages-${randomUUID()}`);
mkdirSync(stageDir, { recursive: true });
cpSync(distDir, stageDir, { recursive: true });

console.log('--- Step 3: Initializing git in staging directory ---');
const runInStage = (cmd) => execSync(cmd, { cwd: stageDir, stdio: 'inherit' });

runInStage('git init -b gh-pages');
runInStage('git config user.name "tltro"');
runInStage('git config user.email "tltrogl@gmail.com"');
runInStage('git add -A');
runInStage('git commit -m "Deploy Astro static build to GitHub Pages"');

// Get remotes from main project
const remotesRaw = execSync('git remote -v', { cwd: projectRoot, encoding: 'utf-8' });
const remotes = {};
for (const line of remotesRaw.trim().split('\n')) {
  const match = line.match(/^(\S+)\s+(\S+)\s+\(push\)$/);
  if (match) {
    remotes[match[1]] = match[2];
  }
}

console.log('--- Step 4: Pushing gh-pages to GitHub remotes ---');
for (const [name, url] of Object.entries(remotes)) {
  console.log(`Pushing gh-pages to ${name} (${url})...`);
  try {
    runInStage(`git remote add ${name} ${url}`);
  } catch {}
  runInStage(`git push -u ${name} gh-pages --force`);
}

console.log('--- Deployment complete! ---');
console.log('Boost site: https://tltrogl.github.io/boost/');
if (remotes.origin) {
  console.log('Origin site: https://tltrogl.github.io/beachline-cleaners/');
}
