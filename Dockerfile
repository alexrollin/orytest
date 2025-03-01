FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for TypeScript)
RUN npm install

# Copy source code and static files
COPY . .

# Compile TypeScript and copy static files
RUN npx tsc && \
    mkdir -p dist/server/static && \
    cp -r server/static/* dist/server/static/

# Clean up dev dependencies
RUN npm prune --production

EXPOSE 5000

# Set production environment
ENV NODE_ENV=production \
    PORT=5000

# Start the server
CMD ["node", "dist/server/index.js"]