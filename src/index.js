const express = require('express');
const bodyParser = require('body-parser');

const routesv1 = require('./routes/v1');

const app = express();

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

routesv1(app);

app.listen(4000, ()=> {
    console.log('Servidor corriendo en el puerto 4000')
});