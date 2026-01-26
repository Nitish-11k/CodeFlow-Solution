param([string]$Key)

Clear-Host
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "   🚀  FOUNDER KIT INSTALLER (WINDOWS)      " -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# 1. Project Name
$ProjectName = Read-Host "📂 Enter Project Name (Default: FounderKit)"
if ([string]::IsNullOrEmpty($ProjectName)) { $ProjectName = "FounderKit" }

# 2. License Key
if ([string]::IsNullOrEmpty($Key)) { $Key = Read-Host "🔑 Enter your License Key" }

if ([string]::IsNullOrEmpty($Key)) {
    Write-Host "❌ Error: License Key cannot be empty." -ForegroundColor Red
    exit
}

# 3. Verify
Write-Host "🔍 Verifying License Key..." -ForegroundColor Yellow
$VerifyUrl = "https://code-flow-solution.vercel.app/api/verify-license?key=$Key"
try {
    $Response = Invoke-RestMethod -Uri $VerifyUrl -Method Get -ErrorAction Stop
} catch {
    Write-Host "❌ Error: Connection failed." -ForegroundColor Red; exit
}
if ($Response.status -ne "Active") {
    Write-Host "❌ Error: Invalid License Key." -ForegroundColor Red; exit
}

# 4. Download & Flatten
Write-Host "⬇️  Downloading Core Files..." -ForegroundColor Yellow
$ZipUrl = "https://code-flow-solution.vercel.app/asset_x99_v2.bin"
$OutputZip = "temp_kit.zip"
$TempExtract = "temp_extract_folder"

Invoke-WebRequest -Uri $ZipUrl -OutFile $OutputZip

Write-Host "📦 Configuring Project: $ProjectName..." -ForegroundColor Yellow

# Extract to temp
Expand-Archive -Path $OutputZip -DestinationPath $TempExtract -Force

# Create final folder
New-Item -ItemType Directory -Force -Path $ProjectName | Out-Null

# Check for nested folder and Move
$NestedFolder = Join-Path $TempExtract "FounderKit"
if (Test-Path $NestedFolder) {
    Move-Item -Path "$NestedFolder\*" -Destination $ProjectName -Force
} else {
    Move-Item -Path "$TempExtract\*" -Destination $ProjectName -Force
}

# Cleanup
Remove-Item $OutputZip -Force
Remove-Item $TempExtract -Recurse -Force

# 5. Key File
$KeyPath = Join-Path $ProjectName "founder.key"
Set-Content -Path $KeyPath -Value $Key

Write-Host ""
Write-Host "✅ SETUP COMPLETE! " -ForegroundColor Green
Write-Host "---------------------------------------------" -ForegroundColor Gray
Write-Host "   cd $ProjectName" -ForegroundColor Cyan
Write-Host "   dotnet tool restore" -ForegroundColor Cyan
Write-Host "   dotnet run --project FounderKit.API" -ForegroundColor Cyan
Write-Host "---------------------------------------------" -ForegroundColor Gray