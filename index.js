var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello World\n");
}).listen(port, hostname, function () {
});
var port = process.env.PORT;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
//# sourceMappingURL=index.js.map