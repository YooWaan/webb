import http from 'http';
import url from 'url';
import fs from 'fs';

const server = http.createServer();

server.on('request', (req, res) => {
  const template = fs.readFile('./dist/index.html', 'utf-8', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end('');
  });
  return;
});

server.listen(5000);
