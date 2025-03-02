FROM node:20.11-slim

# Create app directory
WORKDIR /usr/src/app

# Create a non-root user
RUN groupadd -r nodejs && useradd -r -g nodejs nodejs

# Install production dependencies first
COPY package*.json ./
RUN npm ci --only=production

# Copy app source
COPY server ./server

# Set user
USER nodejs

# Set environment
ENV NODE_ENV=production \
    PORT=5000

EXPOSE 5000

CMD ["node", "server/index.js"]