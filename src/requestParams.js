const express  = require('express');
const {info} = require('./modules/mylogpartial');
const app = express();

app.get('/' , (request, response) => {
    response.status(200).send('<html><body><p>Hello World</p></body></head>')
});
/**
 * En este metodo de capturar querys desde el url, donde el orden y cantidad de querys ya esta definido,
 * a comparacion del metodo query de response, no es dinamico y debe ser manejado de forma estatica
 * en este ejemplo, esta definido para 2 parametros que yaa tienen nombre no asignado por el URL
 * http://localhost:4000/var1/var2
 * y para acceder a ellos, usaremos otro metodo de response, params.
 * 
 * request.params.codigo1 = "var1"
 * request.params.codigo2 = "var2"
 * 
 */
app.get('/info/:codigo/:codigo2', (request, response) => {
    let {codigo, codigo2} = request.params;
    response.send(`<p> El valor introducido para el primer codigo fue: ${ codigo } </p> 
    <p> El valor introducido para el segundo valor fue: ${ codigo2 } </p>`);
})

/**
 * Considera que si la cantidad de parametros no coincide, la peticion ira al caso *
 */


app.get('*', (request, response) => {
    response.status(404).send('Not found')
    info(request.url)
})

app.listen(4000, () => {console.log('Starting server in port 4000')});