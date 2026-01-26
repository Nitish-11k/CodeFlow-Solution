param([string]$Key)

# Clear screen for a clean look
Clear-Host

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "   🚀  FOUNDER KIT INSTALLER (WINDOWS)      " -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# 1. Ask for License Key if not provided via command line
if ([string]::IsNullOrEmpty($Key)) {
    $Key = Read-Host "🔑 Enter your License Key"
}

if ([string]::IsNullOrEmpty($Key)) {
    Write-Host "❌ Error: License Key cannot be empty." -ForegroundColor Red
    exit
}

# 2. Verify Key via API
Write-Host "🔍 Verifying License Key..." -ForegroundColor Yellow
$VerifyUrl = "https://code-flow-solution.vercel.app/api/verify-license?key=$Key"

try {
    $Response = Invoke-RestMethod -Uri $VerifyUrl -Method Get -ErrorAction Stop
}
catch {
    Write-Host "❌ Error: Could not connect to verification server." -ForegroundColor Red
    Write-Host "   Please check your internet connection." -ForegroundColor Gray
    exit
}

if ($Response.status -ne "Active") {
    Write-Host "❌ Error: Invalid License Key." -ForegroundColor Red
    Write-Host "   Please contact support if you think this is a mistake." -ForegroundColor Gray
    exit
}

Write-Host "✅ License Verified!" -ForegroundColor Green

# 3. Download the Hidden Kit
$ZipUrl = "https://code-flow-solution.vercel.app/asset_x99_v2.bin"
$OutputZip = "FounderKit.zip"

Write-Host "⬇️  Downloading FounderKit Core..." -ForegroundColor Yellow

try {
    Invoke-WebRequest -Uri $ZipUrl -OutFile $OutputZip -ErrorAction Stop
}
catch {
    Write-Host "❌ Error: Download failed." -ForegroundColor Red
    exit
}

# 4. Unzip
Write-Host "📦 Extracting Files..." -ForegroundColor Yellow

if (Test-Path "FounderKit") {
    Write-Host "⚠️  'FounderKit' folder already exists. Overwriting..." -ForegroundColor DarkYellow
}

Expand-Archive -Path $OutputZip -DestinationPath "FounderKit" -Force
Remove-Item $OutputZip

# 5. Create the Secret License File
$KeyPath = Join-Path "FounderKit" "founder.key"
Set-Content -Path $KeyPath -Value $Key

Write-Host ""
Write-Host "=============================================" -ForegroundColor Green
Write-Host "   ✅  SETUP COMPLETE! READY TO LAUNCH.     " -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
Write-Host ""
Write-Host "To start the backend, run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "   cd FounderKit" -ForegroundColor Cyan
Write-Host "   dotnet run --project FounderKit.API" -ForegroundColor Cyan
Write-Host ""