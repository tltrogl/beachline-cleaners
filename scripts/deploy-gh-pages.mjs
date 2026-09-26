import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, cpSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';

const projectRoot = process.cwd();

// Get remotes from main project
const remotesRaw = execSync('git remote -v', { cwd: projectRoot, encoding: 'utf-8' });
const remotes = {};
for (const line of remotesRaw.trim().split('\n')) {
  const match = line.match(/^(\S+)\s+(\S+)\s+\(push\)$/);
  if (match) {
    remotes[match[1]] = match[2];
  }
}

for (const [name, url] of Object.entries(remotes)) {
  console.log(`\n--- Deploying to ${name} (${url}) ---`);
  
  let baseEnv = '/boost';
  if (url.includes('beachline-cleaners')) {
    baseEnv = '/beachline-cleaners';
  } else if (url.includes('boost')) {
    baseEnv = '/boost';
  }
  
  console.log(`Building with ASTRO_BASE=${baseEnv}...`);
  execSync('npm run build', { 
    stdio: 'inherit',
    env: { ...process.env, ASTRO_BASE: baseEnv }
  });

  const distDir = path.join(projectRoot, 'dist');
  const noJekyllPath = path.join(distDir, '.nojekyll');

  if (!existsSync(noJekyllPath)) {
    writeFileSync(noJekyllPath, '');
  }

  const stageDir = path.join(tmpdir(), `deploy-gh-pages-${randomUUID()}`);
  mkdirSync(stageDir, { recursive: true });
  cpSync(distDir, stageDir, { recursive: true });

  const runInStage = (cmd) => execSync(cmd, { cwd: stageDir, stdio: 'inherit' });

  runInStage('git init -b gh-pages');
  runInStage('git config user.name "tltro"');
  runInStage('git config user.email "tltrogl@gmail.com"');
  runInStage('git add -A');
  runInStage('git commit -m "Deploy Astro static build to GitHub Pages"');

  try {
    runInStage(`git remote add ${name} ${url}`);
  } catch {}
  runInStage(`git push -u ${name} gh-pages --force`);
}

console.log('\n--- Deployment complete! ---');
console.log('Boost site: https://tltrogl.github.io/boost/');
if (remotes.origin) {
  console.log('Origin site: https://tltrogl.github.io/beachline-cleaners/');
}
