const http = require('http');

const host = '127.0.0.1';
const port = 1245;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

server.listen(port, host, () => {

});

module.exports = server;
