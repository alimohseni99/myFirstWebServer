const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileName = fileNameOfUrl(req.url);
  if (fileName === 'favicon.ico') {
    res.statusCode = 404;
    res.send('');
    return;
  }
  const content = getFileContentOr404(fileName);

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
const getFileContentOr404 = (fileName) => {
  if (!fs.existsSync(`./static/${fileName}`)) {
    fileName = '404.html';
  }

  return fs.readFileSync(`./static/${fileName}`, 'utf-8');
};
const hostName = 'localhost';
const port = 3000;

server.listen(port, hostName, () => {
  console.log(`server runing at HTTP://'${hostName}:${port}/`);
});
