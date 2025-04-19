// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello from Node.js app deployed on Kubernetes!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});