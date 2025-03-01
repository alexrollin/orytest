# Kasm Installer Download

A simple single-page application with an animated button reveal for the Kasm installer download.

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

## Deployment on Coolify
Use the following settings for deployment:

- Build Pack: Docker
- Docker Settings:
  - Docker Compose: No
  - Dockerfile Path: ./Dockerfile
  - Docker Registry: Default
- Port: 5000
- Environment Variables:
  - NODE_ENV: production

### Important Notes

1. Make sure to select Docker as the build pack
2. The application runs on port 5000, ensure this port is exposed
3. Wait for the build process to complete before accessing the application
4. The build process will:
   - Build the frontend (Vite)
   - Bundle the backend (esbuild)
   - Create an optimized production Docker image
   - Start the production server

### Troubleshooting Deployment

If the deployment fails:
1. Check if port 5000 is properly exposed
2. Ensure the build completes successfully
3. Check the logs for any Node.js related errors
4. Make sure Docker is selected as the build pack
5. Try accessing the health check endpoint at `/health`

## Development

To run locally:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5000`.