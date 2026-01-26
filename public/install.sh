#!/bin/bash

# Colors
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${CYAN}🚀 Initializing FounderKit Setup...${NC}"

# 1. Ask for Key (FORCE KEYBOARD INPUT)
echo -n "🔑 Enter your License Key: "
read KEY < /dev/tty   # <--- YE WALI LINE FIX HAI

if [ -z "$KEY" ]; then
  echo -e "${RED}❌ License Key is required.${NC}"
  exit 1
fi

# 2. Verify Key via API
echo -e "${YELLOW}🔍 Verifying License...${NC}"
VERIFY_URL="https://code-flow-solution.vercel.app/api/verify-license?key=$KEY"

# Check HTTP Status
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$VERIFY_URL")

if [ "$HTTP_STATUS" != "200" ]; then
  echo -e "${RED}❌ Invalid License Key or Server Error.${NC}"
  exit 1
fi

echo -e "${GREEN}✅ License Accepted.${NC}"

# 3. Download
ZIP_URL="https://code-flow-solution.vercel.app/asset_x99_v2.bin"
OUTPUT_ZIP="FounderKit.zip"

echo -e "${YELLOW}⬇️  Downloading FounderKit Core...${NC}"
curl -L -o "$OUTPUT_ZIP" "$ZIP_URL"

# 4. Unzip
echo -e "${YELLOW}📦 Extracting Files...${NC}"
if ! command -v unzip &> /dev/null; then
    echo "Installing unzip..."
    sudo apt-get install unzip -y
fi

unzip -q "$OUTPUT_ZIP" -d FounderKit
rm "$OUTPUT_ZIP"

# 5. Create Key File
echo "$KEY" > FounderKit/founder.key

echo -e "${GREEN}✅ Setup Complete!${NC}"
echo -e "   cd FounderKit"
echo -e "   dotnet run --project FounderKit.API"