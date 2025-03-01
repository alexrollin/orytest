FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package.json ./

# Install only production dependencies
RUN npm install --production

# Copy server code
COPY server ./server

EXPOSE 5000

ENV NODE_ENV=production \
    PORT=5000

CMD ["node", "server/index.js"]