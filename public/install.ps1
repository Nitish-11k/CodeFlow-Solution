param([string]$Key)

Write-Host "🚀 Initializing FounderKit Setup..." -ForegroundColor Cyan

# 1. Ask for Key if not provided
if ([string]::IsNullOrEmpty($Key)) {
    $Key = Read-Host "🔑 Enter your License Key"
}

# 2. Verify Key via API
$VerifyUrl = "https://code-flow-solution.vercel.app/api/verify-license?key=$Key"
try {
    $Response = Invoke-RestMethod -Uri $VerifyUrl -Method Get
}
catch {
    Write-Host "❌ Invalid License Key or Server Error." -ForegroundColor Red
    exit
}

if ($Response.status -ne "Active") {
    Write-Host "❌ License Key Rejected." -ForegroundColor Red
    exit
}

# 3. Download the Kit (Make sure this file exists in your public folder!)
$ZipUrl = "https://code-flow-solution.vercel.app/asset_x99_v2.bin"
$OutputZip = "FounderKit.zip"

Write-Host "⬇️  Downloading FounderKit Core..." -ForegroundColor Yellow
Invoke-WebRequest -Uri $ZipUrl -OutFile $OutputZip

# 4. Unzip
Write-Host "📦 Extracting Files..." -ForegroundColor Yellow
Expand-Archive -Path $OutputZip -DestinationPath "FounderKit" -Force
Remove-Item $OutputZip

# 5. Create the Hidden License File (Auto-Magic)
$KeyPath = Join-Path "FounderKit" "founder.key"
Set-Content -Path $KeyPath -Value $Key

Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host "   cd FounderKit" -ForegroundColor Gray
Write-Host "   dotnet run --project FounderKit.API" -ForegroundColor Gray