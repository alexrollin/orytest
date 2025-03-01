FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy server code and static files
COPY server ./server

EXPOSE 5000

# Set production environment
ENV NODE_ENV=production \
    PORT=5000

# Start the server
CMD ["node", "server/index.js"]