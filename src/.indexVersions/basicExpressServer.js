/**
 *  Imports after the installation was done
 */
const express  = require('express');
const {info, error} = require('./modules/mylogpartial');
const {countries} = require('country-list');
const app = express();



/**
 * We need to define a method for app called get, in here we address what to for which response
 * it receives two methods, the string that it is addressing, and a method where we operate,
 * this can be sending a response, logging it into the console or so on.
 */
app.get('/' , (request, response) => {
    /**
     * The response to the request in / is to just print Root Page
     * In order to do that, we need to set the status to 200, which points
     * at a successfull request and then send some html back to the client.
     */
    response.status(200).send('<html><body><p>Hello World</p></body></head>')
});

/**
 * Si respondemos a la peticion, el estado se asigna a 200 de forma automatica
 */
app.get('/info', (request, response) => {
    /**
     * Usaremos el metodo send para responder a la p[eticion indicada, el status de la peticion es 200
     */
    response.send('info')
})

/**
 *  In here we define all the cases that are not defined
 */
app.get('*', (request, response) => {
    response.status(404).send('Not found bitch')
    info(request.url)
})

app.listen(4000, () => {console.log('Starting server in port 4000')});