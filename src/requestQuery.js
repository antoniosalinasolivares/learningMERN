const express  = require('express');
const {info} = require('./modules/mylogpartial');
const app = express();



app.get('/' , (request, response) => {
    response.status(200).send('<html><body><p>Hello World</p></body></head>')
});

app.get('/info', (request, response) => {
    /**
     * En esta ruta, aceptaremos URLS con querys, que seran capturados en forma de JSON
     * El formato del url debera ser: 
     * http://localhost:4000/info?foo=var&info1=var1
     * y el metodo de request, query nos regresara un json de la forma:
     * {
     *  "foo" : "var",
     *  "foo1" : "var1"
     * }
     */
    response.json(request.query);
})

app.get('*', (request, response) => {
    response.status(404).send('Not found bitch')
    info(request.url)
})

app.listen(4000, () => {console.log('Starting server in port 4000')});