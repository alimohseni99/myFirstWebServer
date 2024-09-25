const express = require('express');
const app = express();

const db = [
  {
    id: 1,
    name: 'Ali Mohseni',
    email: 'ali.mohseni@appliedtechnology.se',
  },
  {
    id: 1,
    name: 'Mohseni Ali',
    email: 'testingSomething@nothing.com',
  },
];

app.get('/', (req, res) => {
  const devs = {
    id: 1,
    name: 'Ali Mohseni',
    email: 'ali.mohseni@appliedtechnology.se',
  };
  res.status(201).setHeader('Location', `/api/developers/1`).json(db[1]);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
