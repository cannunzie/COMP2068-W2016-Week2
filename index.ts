import http = require('http');

http.createServer(function(req:http.ServerRequest, res:http.ServerResponse){
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end("Hello World\n")
}).listen(port, hostname, function(){
    
});

var port:number = process.env.PORT;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);