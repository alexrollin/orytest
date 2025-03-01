FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build && \
    mkdir -p server/public && \
    cp -r dist/public/* server/public/

# Expose port 5000
EXPOSE 5000

# Set production environment
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]
