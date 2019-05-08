//Load the http module to create an http server.
var http = require('http');

//Configure our HTTP server to respond with Hello to all requests.
var server = http.createServer(function(requests, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end('Hello World\n');
});

//Listen on port 7000, IP defaults to "127.0.0.1" / "https://localhost:7000"
server.listen(7000);

//put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:7000/');