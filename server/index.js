const express = require('express');
const app = express();

// Make sure port is properly parsed as number
const port = parseInt(process.env.PORT || '5000', 10);

// Basic request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Root endpoint
app.get('/', (_req, res) => {
  res.send('Hello World');
});

// Health check endpoint
app.get('/health', (_req, res) => {
  res.send('OK');
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started on port ${port}`);
  console.log('Environment:', process.env.NODE_ENV);
});