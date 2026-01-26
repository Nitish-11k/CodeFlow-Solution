#!/bin/bash

GREEN='\033[0;32m'
CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${CYAN}🚀 Initializing FounderKit Setup...${NC}"

# 1. Ask for Project Name
echo -n "📂 Enter Project Name (Default: FounderKit): "
read PROJECT_NAME < /dev/tty

if [ -z "$PROJECT_NAME" ]; then
  PROJECT_NAME="FounderKit"
fi

# 2. Ask for Key
echo -n "🔑 Enter your License Key: "
read KEY < /dev/tty

if [ -z "$KEY" ]; then
  echo -e "${RED}❌ License Key is required.${NC}"
  exit 1
fi

# 3. Verify Key
echo -e "${YELLOW}🔍 Verifying License...${NC}"
VERIFY_URL="https://code-flow-solution.vercel.app/api/verify-license?key=$KEY"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$VERIFY_URL")

if [ "$HTTP_STATUS" != "200" ]; then
  echo -e "${RED}❌ Invalid License Key.${NC}"
  exit 1
fi

# 4. Download & Extract
ZIP_URL="https://code-flow-solution.vercel.app/asset_x99_v2.bin"
OUTPUT_ZIP="temp_kit.zip"

echo -e "${YELLOW}⬇️  Downloading Core Files...${NC}"
curl -L -o "$OUTPUT_ZIP" "$ZIP_URL"

echo -e "${YELLOW}📦 Creating Project: $PROJECT_NAME...${NC}"
if ! command -v unzip &> /dev/null; then
    sudo apt-get install unzip -y
fi

unzip -q "$OUTPUT_ZIP" -d "$PROJECT_NAME"
rm "$OUTPUT_ZIP"

# 5. Create Key File
echo "$KEY" > "$PROJECT_NAME/founder.key"

echo -e "${GREEN}✅ Setup Complete!${NC}"
echo -e "${CYAN}---------------------------------------------${NC}"
echo -e "   cd $PROJECT_NAME"
echo -e "   dotnet run --project FounderKit.API"
echo -e "${CYAN}---------------------------------------------${NC}"