param(
    [switch]$SkipFontInstall,
    [switch]$SkipRepoCleanup
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Require-File {
    param([Parameter(Mandatory)][string]$Path)
    if (-not (Test-Path -LiteralPath $Path)) {
        throw "Required file not found: $Path`nRun this script from the Beachline Cleaners project root."
    }
}

function Replace-Literal {
    param(
        [Parameter(Mandatory)][string]$Path,
        [Parameter(Mandatory)][string]$Old,
        [Parameter(Mandatory)][string]$New
    )

    $text = Get-Content -LiteralPath $Path -Raw

    if ($text.Contains($Old)) {
        $updated = $text.Replace($Old, $New)
        Set-Content -LiteralPath $Path -Value $updated -Encoding utf8 -NoNewline
        return
    }

    if ($text.Contains($New)) {
        Write-Host "Already applied: $Path" -ForegroundColor DarkGray
        return
    }

    Write-Warning "Skipped a cleanup in $Path because the source text differs from the version this script was written against."
}

function Replace-Regex {
    param(
        [Parameter(Mandatory)][string]$Path,
        [Parameter(Mandatory)][string]$Pattern,
        [Parameter(Mandatory)][string]$Replacement
    )

    $text = Get-Content -LiteralPath $Path -Raw
    $rx = [regex]::new($Pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

    if ($rx.IsMatch($text)) {
        $updated = $rx.Replace($text, $Replacement, 1)
        Set-Content -LiteralPath $Path -Value $updated -Encoding utf8 -NoNewline
        return
    }

    Write-Warning "Skipped a section cleanup in $Path because that section is already changed or has a different layout."
}

Require-File "package.json"
Require-File "src\layouts\BaseLayout.astro"
Require-File "src\styles\site.css"
Require-File "src\components\Button.astro"
Require-File "src\components\Header.astro"
Require-File "src\pages\index.astro"
Require-File "src\pages\quote.astro"
Require-File "src\data\content.ts"
Require-File "README.md"

Write-Host "Applying Beachline polish pass..." -ForegroundColor Cyan

# ---------------------------------------------------------------------------
# 1. Typography: switch the site to Plus Jakarta Sans.
# ---------------------------------------------------------------------------

Replace-Literal "src\layouts\BaseLayout.astro" `
    "import '@fontsource-variable/atkinson-hyperlegible-next/wght.css';" `
    "import '@fontsource-variable/plus-jakarta-sans/wght.css';"

Replace-Literal "src\styles\site.css" `
    '--font-sans: "Atkinson Hyperlegible Next Variable", system-ui, sans-serif;' `
    '--font-sans: "Plus Jakarta Sans Variable", "Plus Jakarta Sans", system-ui, sans-serif;'

Replace-Literal "src\styles\site.css" `
    'body { @apply m-0 bg-paper font-sans leading-[1.65] text-ink; }' `
    'body { @apply m-0 bg-paper font-sans leading-[1.65] text-ink antialiased; }'

if (-not $SkipFontInstall) {
    if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
        throw "npm is required to update the local font package."
    }

    Write-Host "Updating local font package..." -ForegroundColor DarkCyan
    npm install '@fontsource-variable/plus-jakarta-sans' --save
    if ($LASTEXITCODE -ne 0) { throw "npm install for Plus Jakarta Sans failed." }

    npm uninstall '@fontsource-variable/atkinson-hyperlegible-next' --save
    if ($LASTEXITCODE -ne 0) { throw "npm uninstall for the old font failed." }
}

# ---------------------------------------------------------------------------
# 2. Brand/UI polish: preserve the existing palette/logo, improve finish.
# ---------------------------------------------------------------------------

# Darker CTA surface gives the white button text substantially better contrast
# while preserving the brighter blue for accents and focus states.
Replace-Literal "src\components\Button.astro" `
    "primary: 'border-transparent bg-sea text-white hover:bg-sea-dark active:bg-sea-dark'," `
    "primary: 'border-transparent bg-sea-dark text-white shadow-[0_8px_22px_rgba(0,101,145,.16)] hover:bg-teal active:bg-teal',"

Replace-Literal "src\layouts\BaseLayout.astro" `
    '<meta name="theme-color" content="#0b7fa6" />' `
    '<meta name="theme-color" content="#006591" />'

Replace-Literal "src\layouts\BaseLayout.astro" `
    'bg-sea text-compact-action font-[850] text-white no-underline hover:bg-sea-dark active:bg-sea-dark' `
    'bg-sea-dark text-compact-action font-[850] text-white no-underline hover:bg-teal active:bg-teal'

# Give desktop dropdown and mobile menu enough depth to read as floating UI.
Replace-Literal "src\components\Header.astro" `
    'max-mobile:border max-mobile:border-line max-mobile:bg-white max-mobile:p-[18px] max-mobile:[&.open]:flex' `
    'max-mobile:border max-mobile:border-line max-mobile:bg-white max-mobile:p-[18px] max-mobile:shadow-[0_18px_45px_rgba(28,65,91,.14)] max-mobile:[&.open]:flex'

Replace-Literal "src\components\Header.astro" `
    'rounded-panel border border-line bg-white p-2.5 group-open/services:grid' `
    'rounded-panel border border-line bg-white p-2.5 shadow-[0_16px_38px_rgba(28,65,91,.12)] group-open/services:grid'

# Hero estimator should read as a finished conversion card, not a bordered strip.
Replace-Literal "src\pages\index.astro" `
    'class="hero-estimator mt-7 mb-4 grid grid-cols-[1fr_1.3fr] gap-3 border-y max-mobile:grid-cols-1 border-line bg-white/70 p-4 max-mobile:mt-5 max-mobile:gap-2.5 max-mobile:p-3"' `
    'class="hero-estimator mt-7 mb-4 grid grid-cols-[1fr_1.3fr] gap-3 rounded-panel border border-line bg-white p-4 shadow-[0_14px_40px_rgba(28,65,91,.08)] max-mobile:mt-5 max-mobile:grid-cols-1 max-mobile:gap-2.5 max-mobile:p-3"'

Replace-Literal "src\pages\index.astro" `
    'Clear scope, checklist-based service, and direct communication from quote through completion.' `
    'Clear scope, direct communication, and a room-by-room plan from quote through completion.'

# Slightly relax the quote-page display tracking for Plus Jakarta Sans.
Replace-Literal "src\pages\quote.astro" `
    'tracking-[-.05em]' `
    'tracking-[-.035em]'

# Remove an accidental extra top margin inside the already-spaced aside stack.
Replace-Literal "src\pages\quote.astro" `
    '<Button variant="secondary" class="mt-5 w-full" href={site.phoneHref}>' `
    '<Button variant="secondary" class="w-full" href={site.phoneHref}>'

# ---------------------------------------------------------------------------
# 3. Copy cleanup: remove repetition and unverified timing/supply claims.
# ---------------------------------------------------------------------------

Replace-Literal "src\data\content.ts" `
    "      'Supplies provided'," `
    "      'Quotes matched to your scope',"

Replace-Literal "src\data\content.ts" `
    "      'Checklist-based cleaning'," `
    "      'Room-by-room cleaning',"

Replace-Literal "src\data\content.ts" `
    "    heading: 'Simple, reliable cleaning from quote to finish.'," `
    "    heading: 'From quote to clean, kept simple.',"

Replace-Literal "src\data\content.ts" `
    "        title: 'We Clean to a Checklist'," `
    "        title: 'Confirm the Cleaning Plan',"

Replace-Literal "src\data\content.ts" `
    "        text: 'Room-by-room cleaning based on the plan agreed when booking.'," `
    "        text: 'We agree on the rooms, priorities, extras, and timing before the visit.',"

Replace-Literal "src\data\content.ts" `
    "      { title: 'Supplies provided', text: 'Standard cleaning supplies and equipment are brought for the job.' }," `
    "      { title: 'Room-by-room plan', text: 'Cleaning follows the priorities and scope agreed for your property.' },"

Replace-Literal "src\data\content.ts" `
    "      { title: 'Checklist-based cleaning', text: 'Each visit follows the room-by-room scope agreed when you book.' }," `
    "      { title: 'Direct communication', text: 'Call or text the local person responsible for scheduling and service.' },"

Replace-Literal "src\data\content.ts" `
    "  lede: 'Share a few details and we\'ll follow up with a quote, usually within one business day.'," `
    "  lede: 'Share a few details and we\'ll follow up to confirm scope, availability, and pricing.',"

Replace-Literal "src\data\content.ts" `
    "    'Checklist-based service'," `
    "    'Scope confirmed before service',"

Replace-Literal "src\data\content.ts" `
    "      a: 'No, you do not need to be home. Most of our clients provide us with a spare key or a door code so we can clean while they are out or at work. If you prefer to be home, that is completely fine too.'," `
    "      a: 'No. If you will be out, we will agree on secure property access before the appointment. If you prefer to be home, that is completely fine too.',"

Replace-Literal "src\data\content.ts" `
    "      a: 'Yes, we bring all of our own professional-grade cleaning supplies and equipment. If you have specific products you prefer us to use for delicate surfaces, just let us know and leave them out for us.'," `
    "      a: 'We bring standard cleaning supplies and equipment. If you have delicate surfaces or specific product preferences, let us know before the visit.',"

Replace-Literal "src\data\content.ts" `
    "        a: 'Yes, we offer flexible scheduling including after-hours and weekend cleaning to minimize disruption to your business operations.'," `
    "        a: 'After-hours or weekend cleaning can be discussed based on your building access, requested schedule, and availability.',"

Replace-Literal "src\data\content.ts" `
    "  lede: 'We’ll review your request and follow up within one business day by phone or email. If you need to reach us sooner, call or text anytime.'," `
    "  lede: 'We’ll review your request and follow up by phone or email. If you need to reach us sooner, call or text us.',"

# Tolerant fallback for branches where the wording differs slightly.
Replace-Regex "src\data\content.ts" `
    '(?m)^([ \t]*)lede:[^\r\n]*Share a few details[^\r\n]*within one business day[^\r\n]*$' `
    '${1}lede: "Share a few details and we''ll follow up to confirm scope, availability, and pricing.",'

Replace-Regex "src\data\content.ts" `
    '(?m)^([ \t]*)lede:[^\r\n]*review your request[^\r\n]*within one business day[^\r\n]*$' `
    '${1}lede: "We''ll review your request and follow up by phone or email. If you need to reach us sooner, call or text us.",'

# ---------------------------------------------------------------------------
# 4. Repository cleanup for the actual Cloudflare Pages deployment.
# ---------------------------------------------------------------------------

if (-not $SkipRepoCleanup) {
    if (Test-Path ".github\workflows\deploy.yml") {
        Remove-Item ".github\workflows\deploy.yml" -Force
    }
    if (Test-Path "setup-github-pages.ps1") {
        Remove-Item "setup-github-pages.ps1" -Force
    }
    if (Test-Path "scripts\deploy-gh-pages.mjs") {
        Remove-Item "scripts\deploy-gh-pages.mjs" -Force
    }

    if (Get-Command npm -ErrorAction SilentlyContinue) {
        npm pkg delete scripts.deploy
        if ($LASTEXITCODE -ne 0) { throw "Could not remove the obsolete GitHub Pages npm script." }
    }

    $deploymentSection = @'
## Deployment

Production hosting is handled by Cloudflare Pages.

- Source repository: `https://github.com/tltrogl/beachline-cleaners.git`
- Production Pages project: `beachline-cleaners.pages.dev`
- Custom domain: `https://beachlinecleaners.com`
- Build command: `npm run build`
- Build output directory: `dist`

Pushes to the production branch connected in Cloudflare Pages trigger a new build and deployment. GitHub Pages is not used.

## Rename the business
'@

    Replace-Regex "README.md" `
        '## GitHub Deployment.*?## Rename the business' `
        $deploymentSection

    $quoteSection = @'
## Quote form

Quote requests are submitted through Formspree from `src/pages/quote.astro`. The endpoint is configured in `src/data/content.ts`. The form includes a honeypot field, native browser validation, an explicit privacy disclosure, and redirects successful submissions to `/quote-success/`.

After deployment changes, send a clearly marked test submission and verify both Formspree receipt and the success redirect before relying on the form for leads.

The mobile quick action bar provides Call, Text, and Get a Quote buttons and is hidden on `/quote/` and `/quote-success/`.

## Images & Alt Text
'@

    Replace-Regex "README.md" `
        '## Quote form.*?## Images & Alt Text' `
        $quoteSection

    Replace-Literal "README.md" `
        'The homepage hero uses `public/images/hero-living-room.jpg`. The rental section uses `public/images/rental-bedroom.jpg`.' `
        'The homepage hero uses `public/images/cleaner-counter.webp`. The rental section uses `public/images/rental-bedroom.jpg`.'
}

# ---------------------------------------------------------------------------
# 5. Validate.
# ---------------------------------------------------------------------------

Write-Host ""
Write-Host "Running production build..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    throw "The production build failed. Review the build output above; changes have not been committed."
}

if (Get-Command git -ErrorAction SilentlyContinue) {
    Write-Host ""
    Write-Host "Diff check:" -ForegroundColor Cyan
    git diff --check
    if ($LASTEXITCODE -ne 0) {
        throw "git diff --check found whitespace/errors."
    }

    git diff --stat
    Write-Host ""
    git status --short
}

Write-Host ""
Write-Host "Polish pass applied and production build passed." -ForegroundColor Green
Write-Host "Review locally with: npm run dev"
Write-Host "Then commit/push when you are happy with it."
