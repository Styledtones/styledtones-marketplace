const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from client folder
app.use(express.static(path.join(__dirname, '../client')));

// Serve public files (like PDFs)
app.use('/public', express.static(path.join(__dirname, '../public')));

// Example route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
