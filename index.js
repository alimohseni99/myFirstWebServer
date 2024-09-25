const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-typw', 'text/plain');
  res.end('<h1>Hello fellow developer!</h1>');
});

const hostName = 'localhost';
const port = 3000;

server.listen(port, hostName, () => {
  console.log(`server runing at HTTP://'${hostName}:${port}/`);
});
