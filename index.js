const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const devs = {
    id: 1,
    name: 'Ali Mohseni',
    email: 'ali.mohseni@appliedtechnology.se',
  };
  res.status(201).setHeader('Location', `/api/developers/1`).json(devs);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
