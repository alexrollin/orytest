FROM node:20-slim

WORKDIR /app

# Copy only what's needed
COPY package.json ./
COPY server ./server

# Install only production dependencies
RUN npm install --production

EXPOSE 5000

ENV NODE_ENV=production \
    PORT=5000

CMD ["node", "server/index.js"]