# Kasm Installer Download

A simple web application for downloading the Kasm installer.

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

### Coolify Settings

1. Build Pack: Docker
2. Docker Settings:
   - Docker Compose: No
   - Dockerfile Path: ./Dockerfile
   - Docker Registry: Default
3. Port: 5000
4. Environment Variables:
   - NODE_ENV: production

### Verification Steps

1. Check if the server is running:
   - Access the health check endpoint at `/health`
   - Should return "OK" if the server is running
2. Access the main page:
   - Should show a download button
   - Clicking the button should download the installer

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
node server/index.js
```

The application will be available at `http://localhost:5000`.