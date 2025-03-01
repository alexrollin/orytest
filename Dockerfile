FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including TypeScript
RUN npm install

# Copy source code and static files
COPY . .

# Compile TypeScript
RUN npx tsc server/index.ts --outDir dist --esModuleInterop true

EXPOSE 5000

# Set production environment
ENV NODE_ENV=production \
    PORT=5000

# Start the server
CMD ["node", "dist/index.js"]