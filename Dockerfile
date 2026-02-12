# Multi-stage Dockerfile for Vite static site
# Builder stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (production only during build)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Runner stage: lightweight Node image serving static files with `serve`
FROM node:20-alpine AS runner
WORKDIR /app

# Install a small static file server
RUN npm install -g serve@14.0.1

# Copy built assets
COPY --from=builder /app/dist ./dist

# Cloud Run provides PORT via env var. Default to 8080.
ENV PORT=8080
EXPOSE 8080

# Use shell form so $PORT is expanded at runtime
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:$PORT"]

