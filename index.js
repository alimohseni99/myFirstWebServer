const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const content = fs.readFileSync('./static/index.html', 'utf-8');

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end(content);
});

const hostName = 'localhost';
const port = 3000;

server.listen(port, hostName, () => {
  console.log(`server runing at HTTP://'${hostName}:${port}/`);
});
