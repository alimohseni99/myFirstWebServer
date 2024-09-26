const express = require('express');
const app = express();

const db = [
  {
    id: 1,
    name: 'Ali Mohseni',
    email: 'ali.mohseni@appliedtechonology.se',
  },
  {
    id: 2,
    name: 'Beatrice Dev',
    email: 'bea@salt.dev',
  },
  {
    id: 3,
    name: 'Daniel KHormos',
    email: 'Daniel.Khormos@appliedtechnology.se',
  },
];

app.use(express.json());

app.get('/api/developers/', (req, res) => {
  res.json(db);
});

app.get('/api/developers/:id', (req, res) => {
  const dev = db.find((dev) => dev.id == req.params.id);

  return dev ? res.json(dev) : res.status(404).end();
});

app.post('/api/developers/', (req, res) => {
  const newDeveloper = {
    id: db.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  db.push(newDeveloper);

  res
    .status(201)
    .setHeader('location', `/api/developers/${newDeveloper.id}`)
    .json(newDeveloper);
});

app.delete('/api/developers/:id', (req, res) => {
  db.splice(req.params.id - 1, 1);
  res.sendStatus(204).end();
});

//curl -X PATCH http://localhost:3000/api/developers/1-H "Content-Type: application/json" -d '{"name": "Stefan", "email": "stafasson@gmail.com"}'
app.patch('/api/developers/:id', (req, res) => {
  const dev = db.find((dev) => dev.id == req.params.id);

  if (!dev) {
    return res.status(404).end();
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send('name and email are required');
  }

  dev.name = name;
  dev.email = email;

  return res.json(dev);
});

module.exports = { app };
