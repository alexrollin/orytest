FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for TypeScript)
RUN npm install

# Copy source code and static files
COPY . .

# Compile TypeScript and copy static files
RUN npx tsc server/index.ts --outDir dist --esModuleInterop true && \
    mkdir -p dist/static && \
    cp -r server/static/* dist/static/

# Clean up dev dependencies
RUN npm prune --production

EXPOSE 5000

# Set production environment
ENV NODE_ENV=production \
    PORT=5000

# Start the server
CMD ["node", "dist/index.js"]