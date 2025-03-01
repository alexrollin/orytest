# Kasm Installer Download Page

A simple single-page application with an animated button reveal for the Kasm installer download.

## Deployment on Coolify

Use the following settings for deployment:

- Build Pack: Nixpack
- Build Command: `npm run build && mkdir -p server/public && cp -r dist/public/* server/public/`
- Start Command: `npm start`
- Port: 5000

### Environment Variables

No environment variables are required for this application.

### Important Notes

1. Make sure to select Nixpack as the build pack
2. The application runs on port 5000, ensure this port is exposed
3. Wait for the build process to complete before accessing the application
4. The build process will:
   - Install all dependencies
   - Build the frontend (Vite)
   - Bundle the backend (esbuild)
   - Start the production server

### Troubleshooting Deployment

If the deployment fails:
1. Check if port 5000 is properly exposed
2. Ensure the build completes successfully
3. Check the logs for any Node.js related errors
4. Make sure Nixpack is selected as the build pack

## Development

To run locally:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5000`.