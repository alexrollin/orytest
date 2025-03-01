const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Server error');
});

// Add request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get('/health', (req, res) => {
  console.log('Health check requested');
  res.send('OK');
});

app.get('/', (req, res) => {
  console.log('Home page requested');
  res.send('Hello World');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log('Environment:', process.env.NODE_ENV);
});