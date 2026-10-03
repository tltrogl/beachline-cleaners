$ErrorActionPreference = 'Stop'

$siteImage = '.\src\components\SiteImage.astro'
$migration = '.\scripts\migrate-images-to-src.mjs'

if (-not (Test-Path $siteImage)) {
    throw "Missing: $siteImage"
}

# Repair SiteImage.astro
$lines = Get-Content -LiteralPath $siteImage
$found = $false

$lines = foreach ($line in $lines) {
    if ($line -match '\)\.replace\(/\^') {
        $found = $true
        "    ).replace(/^\/+/, '');"
    }
    else {
        $line
    }
}

if (-not $found) {
    throw "Could not find the broken replace() line in SiteImage.astro"
}

Set-Content -LiteralPath $siteImage -Value $lines -Encoding utf8
Write-Host "[fixed] src/components/SiteImage.astro"

# Repair the migration script so it does not recreate the bug
if (Test-Path $migration) {
    $lines = Get-Content -LiteralPath $migration

    $insideTemplate = $false
    $fixedMigration = $false

    $lines = foreach ($line in $lines) {

        if ($line -like '*const siteImageComponent = `*') {
            $insideTemplate = $true
        }

        if (
            $insideTemplate -and
            -not $fixedMigration -and
            $line -match '\)\.replace\(/\^'
        ) {
            $fixedMigration = $true
            "    ).replace(/^\\/+/, '');"
        }
        else {
            $line
        }
    }

    if ($fixedMigration) {
        Set-Content -LiteralPath $migration -Value $lines -Encoding utf8
        Write-Host "[fixed] scripts/migrate-images-to-src.mjs"
    }
    else {
        Write-Host "[warning] Migration script replace() line not found"
    }
}

# Verify SiteImage
$content = Get-Content -LiteralPath $siteImage -Raw

if (-not $content.Contains(").replace(/^\/+/, '');")) {
    throw "Verification failed: SiteImage.astro regex is still incorrect"
}

Write-Host ""
Write-Host "Repair verified successfully."
