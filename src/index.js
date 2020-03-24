const express = require('express');

const routesv1 = require('./routes/v1');

const app = express();

routesv1(app);

app.listen(4000, ()=> {
    console.log('Servidor corriendo en el puerto 4000')
});