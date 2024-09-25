const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-typw', 'text/plain');
  res.end('hello fellow developer!');
});

const hostName = 'localhost';
const port = 3000;

server.listen(port, hostName, () => {
  console.log(`server runing at HTTP://'${hostName}:${port}/`);
});
