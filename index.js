const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileName = fileNameOfUrl(req.url);
  const content = fs.readFileSync(`./static/${fileName}`, 'utf-8');

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end(content);

  console.log(`The URL for the request was '${req.url}'`);
  console.log(`The Method for the request was '${req.method}'`);
});
const fileNameOfUrl = (url) => {
  let fileName = '';
  if (url.split('/')[1] === '') {
    fileName = 'index.html';
  } else {
    fileName = url.split('/')[1];
  }
  return fileName;
};

const hostName = 'localhost';
const port = 3000;

server.listen(port, hostName, () => {
  console.log(`server runing at HTTP://'${hostName}:${port}/`);
});
