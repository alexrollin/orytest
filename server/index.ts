import express from "express";
import path from "path";

const app = express();

// Health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

// Serve static HTML file
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});