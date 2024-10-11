// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('This is the Contact page.');
});

// Dynamic user profile route
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Profile page for user with ID: ${userId}`);
});

// 404 route (for unmatched routes)
app.use((req, res) => {
  res.status(404).send('Page not found.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


