/**
 * Los core modules son utiliodades que existen ya en Node y podemos hacer uso de ellas,
 * para ello, necesitamos instanciar una variable que apunte al modulo que vayamoa a utilizar.
 */

// Creamos una variable http para importar el core module de http de NodeJS
let http = require('http');
// Otro modulo muy usado en Node es fs, que facilita el acceso a ficheros del sistema.
let filesystem = require('fs'); 


// Instanciamos un servidor html, que recibe una funcion que recibe como argumentos request y response 
var server = http.createServer(function(request, response){

    //al evaluar el tipo de request, podemos regresar texto personalizado
    if(request.url === "/"){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>Root page</p></body></head>');
        response.end();
    } else if(request.url === "/exit"){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>Exit page</p></body></head>');
        response.end();
    } else {
        response.writeHead(404,{'Content-Type':'text/html'});
        response.write('<html><body><p>Vete a la verga 404 not found</p></body></head>');
        response.end();
    }
    
});



//abrimos el servisor en el puerto 4000 y notificamos en la consola
server.listen(4000)
console.log("Opening server in port 4000");
