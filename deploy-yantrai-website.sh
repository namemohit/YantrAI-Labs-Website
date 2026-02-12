#!/bin/bash
set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration (edit as needed)
PROJECT_ID="ogretailos-474407"
REGION="us-central1"
REPO="og-repo"
SERVICE_NAME="yantrai-labs-website"
IMAGE_NAME="yantrai-labs-website"
IMAGE_TAG="latest"

# Derived
FULL_IMAGE_NAME="$REGION-docker.pkg.dev/$PROJECT_ID/$REPO/$IMAGE_NAME:$IMAGE_TAG"

echo -e "${BLUE}🚀 Starting website deployment to Cloud Run${NC}"
echo -e "${BLUE}Project: $PROJECT_ID${NC}"
echo -e "${BLUE}Region: $REGION${NC}"
echo -e "${BLUE}Service: $SERVICE_NAME${NC}"
echo -e "${BLUE}Image: $FULL_IMAGE_NAME${NC}"
echo ""

# Prereqs
echo -e "${YELLOW}📋 Checking prerequisites...${NC}"
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ gcloud CLI is not installed. Please install it first.${NC}"
    exit 1
fi

if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo -e "${RED}❌ Not authenticated with gcloud. Please run 'gcloud auth login' first.${NC}"
    exit 1
fi

echo -e "${YELLOW}🔧 Setting project to $PROJECT_ID...${NC}"
gcloud config set project $PROJECT_ID

echo -e "${YELLOW}🔐 Configuring Docker authentication...${NC}"
gcloud auth configure-docker $REGION-docker.pkg.dev

echo -e "${YELLOW}🏗️  Building Docker image...${NC}"
docker buildx create --use --name webbuilder 2>/dev/null || docker buildx use webbuilder

echo -e "${YELLOW}📦 Building and pushing image to Artifact Registry...${NC}"
docker buildx build \
    --platform linux/amd64 \
    -f Dockerfile \
    -t $FULL_IMAGE_NAME \
    --push \
    --provenance=false \
    .

echo -e "${GREEN}✅ Image built and pushed successfully${NC}"

echo -e "${YELLOW}🚀 Deploying to Cloud Run...${NC}"
gcloud run deploy $SERVICE_NAME \
    --image $FULL_IMAGE_NAME \
    --region $REGION \
    --platform managed \
    --allow-unauthenticated \
    --port 8080 \
    --cpu 1 \
    --memory 512Mi \
    --min-instances 0 \
    --max-instances 5 \
    --timeout 300

echo -e "${GREEN}✅ Deployment completed successfully${NC}"

SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)")
echo -e "${GREEN}🌐 Service URL: $SERVICE_URL${NC}"

echo -e "${YELLOW}🧪 Testing deployment...${NC}"
if curl -s -f "$SERVICE_URL" > /dev/null; then
    echo -e "${GREEN}✅ Homepage accessible${NC}"
else
    echo -e "${RED}❌ Homepage failed${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Website deployment completed!${NC}"
echo -e "${BLUE}Service URL: $SERVICE_URL${NC}"

