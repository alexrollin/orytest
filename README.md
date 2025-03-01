# Kasm Installer Download Page

A simple single-page application with an animated button reveal for the Kasm installer download.

## Deployment on Coolify

Use the following settings for deployment:

- Build Pack: Nixpack
- Build Command: `npm run build`
- Start Command: `npm start`
- Port: 5000

### Environment Variables

No environment variables are required for this application.

### Important Notes

1. Make sure to select Nixpack as the build pack
2. The application runs on port 5000, ensure this port is exposed
3. Wait for the build process to complete before accessing the application

## Development

To run locally:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5000`.