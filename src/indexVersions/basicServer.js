var http = require('http');


var server = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<html><body><p>Hello world</p></body></head>');
    response.end();
});


server.listen(4000)
console.log("Opening server in port 4000");
