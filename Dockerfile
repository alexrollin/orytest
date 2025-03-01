FROM node:20-slim

WORKDIR /app

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package.json ./

# Install only production dependencies
RUN npm install --production

# Copy server code
COPY server ./server

# Health check configuration
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

EXPOSE 5000

ENV NODE_ENV=production \
    PORT=5000

CMD ["node", "server/index.js"]