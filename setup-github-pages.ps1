param(
    [string]$Domain = "beachlinecleaners.com",
    [string]$Branch = "",
    [switch]$IncludeAllChanges,
    [switch]$NoPush
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Require-Command {
    param([Parameter(Mandatory)][string]$Name)

    if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
        throw "Required command '$Name' was not found in PATH."
    }
}

Write-Host "Configuring Astro + GitHub Pages for https://$Domain ..." -ForegroundColor Cyan

Require-Command git
Require-Command gh

# Make sure this is the Astro project root.
if (-not (Test-Path "package.json")) {
    throw "package.json not found. Run this script from the Astro project root."
}

if (-not (Test-Path "astro.config.mjs")) {
    throw "astro.config.mjs not found. Run this script from the Astro project root."
}

git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
    throw "This folder is not a Git repository."
}

if ([string]::IsNullOrWhiteSpace($Branch)) {
    $Branch = (git branch --show-current).Trim()
    if ([string]::IsNullOrWhiteSpace($Branch)) {
        throw "Could not determine the current Git branch. Pass -Branch main explicitly."
    }
}

# GitHub's Astro action detects the package manager from a committed lockfile.
$lockfiles = @(
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "bun.lock",
    "bun.lockb"
)

if (-not ($lockfiles | Where-Object { Test-Path $_ })) {
    Write-Host "No package-manager lockfile found; creating package-lock.json with npm..." -ForegroundColor Yellow
    Require-Command npm
    npm install --package-lock-only
    if ($LASTEXITCODE -ne 0) {
        throw "npm could not create package-lock.json."
    }
}

# 1. Create the GitHub Pages deployment workflow.
$workflowDir = ".github/workflows"
New-Item -ItemType Directory -Force -Path $workflowDir | Out-Null

$workflow = @'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ __BRANCH__ ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Install, build, and upload Astro site
        uses: withastro/action@v6

  deploy:
    needs: build
    runs-on: ubuntu-latest

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
'@

$workflow = $workflow.Replace("__BRANCH__", $Branch)
Set-Content -Path "$workflowDir/deploy.yml" -Value $workflow -Encoding utf8

# 2. Add the custom domain to Astro's public output.
New-Item -ItemType Directory -Force -Path "public" | Out-Null
Set-Content -Path "public/CNAME" -Value $Domain -Encoding ascii

# 3. Set Astro's site URL and remove base, because a custom domain is being used.
$configPath = "astro.config.mjs"
$config = Get-Content -Path $configPath -Raw

# Remove a simple one-line base setting such as: base: '/repo',
$config = [regex]::Replace(
    $config,
    '(?m)^[ \t]*base[ \t]*:[ \t]*["''][^"'']*["''][ \t]*,?[ \t]*\r?\n',
    ''
)

$sitePattern = '(?m)^([ \t]*)site[ \t]*:[ \t]*["''][^"'']*["''][ \t]*,?'
if ([regex]::IsMatch($config, $sitePattern)) {
    $config = [regex]::Replace(
        $config,
        $sitePattern,
        {
            param($m)
            return $m.Groups[1].Value + "site: 'https://$Domain',"
        },
        1
    )
}
elseif ($config -match 'defineConfig\s*\(\s*\{') {
    $config = [regex]::Replace(
        $config,
        'defineConfig\s*\(\s*\{',
        {
            param($m)
            return $m.Value + "`r`n  site: 'https://$Domain',"
        },
        1
    )
}
else {
    throw "Could not safely patch astro.config.mjs. No defineConfig({ ... }) block was found."
}

Set-Content -Path $configPath -Value $config -Encoding utf8

# 4. Make sure GitHub CLI is authenticated.
gh auth status *> $null
if ($LASTEXITCODE -ne 0) {
    Write-Host "GitHub CLI is not authenticated. Starting GitHub login..." -ForegroundColor Yellow
    gh auth login
    if ($LASTEXITCODE -ne 0) {
        throw "GitHub authentication failed."
    }
}

$repo = (gh repo view --json nameWithOwner --jq '.nameWithOwner').Trim()
if ([string]::IsNullOrWhiteSpace($repo)) {
    throw "Could not determine the GitHub repository from this folder's remote."
}

Write-Host "GitHub repository: $repo" -ForegroundColor DarkGray

# 5. Configure GitHub Pages to use a GitHub Actions workflow.
gh api "repos/$repo/pages" --silent *> $null
$pagesExists = ($LASTEXITCODE -eq 0)

if ($pagesExists) {
    gh api --method PUT "repos/$repo/pages" -f build_type=workflow --silent
    if ($LASTEXITCODE -ne 0) {
        throw "Could not switch GitHub Pages to GitHub Actions."
    }
}
else {
    gh api --method POST "repos/$repo/pages" -f build_type=workflow --silent
    if ($LASTEXITCODE -ne 0) {
        throw "Could not enable GitHub Pages for this repository."
    }
}

# 6. Stage files.
# By default, only deployment/configuration files are staged.
# Use -IncludeAllChanges if you also want the current site changes included in this deployment.
if ($IncludeAllChanges) {
    git add -A
}
else {
    $pathsToAdd = @(
        ".github/workflows/deploy.yml",
        "public/CNAME",
        "astro.config.mjs"
    )

    if (Test-Path "package-lock.json") {
        $pathsToAdd += "package-lock.json"
    }

    git add -- $pathsToAdd
}

git diff --cached --quiet
$hasStagedChanges = ($LASTEXITCODE -ne 0)

if ($hasStagedChanges) {
    git commit -m "Configure Astro deployment to GitHub Pages"
    if ($LASTEXITCODE -ne 0) {
        throw "Git commit failed."
    }
}
else {
    Write-Host "Deployment configuration is already committed." -ForegroundColor DarkGray
}

if (-not $NoPush) {
    git push origin $Branch
    if ($LASTEXITCODE -ne 0) {
        throw "Git push failed."
    }

    Write-Host ""
    Write-Host "Done." -ForegroundColor Green
    Write-Host "GitHub Actions will now build Astro and deploy it to GitHub Pages."
    Write-Host "Domain: https://$Domain"
    Write-Host ""
    Write-Host "You can watch the deployment with:" -ForegroundColor Cyan
    Write-Host "  gh run watch"
}
else {
    Write-Host ""
    Write-Host "Configuration completed without pushing (-NoPush)." -ForegroundColor Yellow
}
