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
  for (let i = 0; i < db.length; i++) {
    if (db[i].id == req.params.id) {
      res.json(db[i]);
      return;
    }
  }
  res.status(404).end();
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
