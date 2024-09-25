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

app.get('/api/developers/:id', (req, res) => {
  const dev = db.find((dev) => dev.id == req.params.id);

  return dev ? res.json(dev) : res.status(404).end();
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
