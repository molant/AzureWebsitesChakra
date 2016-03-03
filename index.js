var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World from engine: ' + process.jsEngine + ', version: ' + process.version);
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log('Server running at http://localhost:' + port);