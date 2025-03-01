import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// ES modules compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Log startup configuration
console.log('Starting server with configuration:');
console.log('- Environment:', process.env.NODE_ENV);
console.log('- Port:', process.env.PORT || 5000);
console.log('- Static files directory:', path.join(__dirname, 'static'));

// Health check endpoint
app.get('/health', (_req, res) => {
  console.log('Health check requested');
  res.status(200).send('OK');
});

// Serve static HTML file
app.get('/', (_req, res) => {
  const staticFilePath = path.join(__dirname, 'static', 'index.html');
  console.log('Serving static file from:', staticFilePath);

  try {
    res.sendFile(staticFilePath, (err) => {
      if (err) {
        console.error('Error serving static file:', err);
        res.status(500).send('Error serving static file');
      }
    });
  } catch (err) {
    console.error('Exception while serving static file:', err);
    res.status(500).send('Server error');
  }
});

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

const port = Number(process.env.PORT) || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});