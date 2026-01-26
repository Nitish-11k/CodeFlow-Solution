param([string]$Key)

Clear-Host
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "   🚀  FOUNDER KIT INSTALLER (WINDOWS)      " -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# 1. Ask for Project Name
$ProjectName = Read-Host "📂 Enter Project Name (Default: FounderKit)"
if ([string]::IsNullOrEmpty($ProjectName)) {
    $ProjectName = "FounderKit"
}

# 2. Ask for License Key
if ([string]::IsNullOrEmpty($Key)) {
    $Key = Read-Host "🔑 Enter your License Key"
}

if ([string]::IsNullOrEmpty($Key)) {
    Write-Host "❌ Error: License Key cannot be empty." -ForegroundColor Red
    exit
}

# 3. Verify Key
Write-Host "🔍 Verifying License Key..." -ForegroundColor Yellow
$VerifyUrl = "https://code-flow-solution.vercel.app/api/verify-license?key=$Key"

try {
    $Response = Invoke-RestMethod -Uri $VerifyUrl -Method Get -ErrorAction Stop
} catch {
    Write-Host "❌ Error: Connection failed." -ForegroundColor Red
    exit
}

if ($Response.status -ne "Active") {
    Write-Host "❌ Error: Invalid License Key." -ForegroundColor Red
    exit
}

# 4. Download & Extract
Write-Host "⬇️  Downloading Core Files..." -ForegroundColor Yellow
$ZipUrl = "https://code-flow-solution.vercel.app/asset_x99_v2.bin"
$OutputZip = "temp_kit.zip"

Invoke-WebRequest -Uri $ZipUrl -OutFile $OutputZip

Write-Host "📦 Creating Project: $ProjectName..." -ForegroundColor Yellow
Expand-Archive -Path $OutputZip -DestinationPath $ProjectName -Force
Remove-Item $OutputZip

# 5. Setup License
$KeyPath = Join-Path $ProjectName "founder.key"
Set-Content -Path $KeyPath -Value $Key

Write-Host ""
Write-Host "✅ SETUP COMPLETE! " -ForegroundColor Green
Write-Host "---------------------------------------------" -ForegroundColor Gray
Write-Host "   cd $ProjectName" -ForegroundColor Cyan
Write-Host "   dotnet run --project FounderKit.API" -ForegroundColor Cyan
Write-Host "---------------------------------------------" -ForegroundColor Gray
Write-Host ""