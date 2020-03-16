/**
 * Modulos locales, de forma constante, definiremos nosotros utildades para facilitar nuestros flujos de trabajo
 * En este caso, definiremos un modulo en un archivo ajeno este, y lo ubicaremos en  
 */


let http = require('http');
let log = require('./modules/mylog');
log.test();


let server = http.createServer(function(request, response){

  
    if(request.url === "/"){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>Root page</p></body></head>');
        response.end();
    } else if(request.url === "/exit"){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>Exit page</p></body></head>');
        response.end();
    } else if(request.url === "/info"){
        var result = log.info(request.url);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }  else if(request.url === "/error"){
        var result = log.info(request.url);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    } else {
        let result = log.error(request.url);
        response.writeHead(404,{'Content-Type':'text/html'});
        response.write('<html><body>');
        response.write('<p>Error 404 page not found</p>');
        response.write('<p>'+ result + ' does not exist</p>');
        response.write('</body></head>')
        response.end();
    }
});


//abrimos el servisor en el puerto 4000 y notificamos en la consola
server.listen(4000)
console.log("Opening server in port 4000");
