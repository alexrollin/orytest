# Minimal Express Server

A minimal Express.js server with Docker support.

## Endpoints

- `/` - Returns "Hello World"
- `/health` - Returns "OK"

## Docker Deployment

1. Build the Docker image:
```bash
docker build -t kasm-download .
```

2. Run the container:
```bash
docker run -p 5000:5000 kasm-download
```

The application will be available at `http://localhost:5000`.

## Coolify Deployment Settings

1. Build Settings
   - Build Pack: Docker
   - Dockerfile Path: ./Dockerfile
   - Docker Compose: No

2. Environment Variables
   - PORT=5000
   - NODE_ENV=production

3. Port Configuration
   - Exposed Port: 5000

## Verification Steps

1. After deployment, verify these endpoints:
   - `https://your-domain/health` should return "OK"
   - `https://your-domain/` should return "Hello World"

2. If endpoints don't respond:
   - Check Coolify logs for startup errors
   - Verify environment variables are set correctly
   - Confirm port 5000 is properly exposed


## Development

To run locally:

```bash
npm install
node server/index.js
```

The application will be available at `http://localhost:5000`.