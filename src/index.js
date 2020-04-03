const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const routesv1 = require('./routes/v1');

const app = express();

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

routesv1(app);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
    console.log('Conectado a la base de datos')
    app.listen(process.env.PORT, ()=> {
        console.log('Servidor corriendo en el puerto 4000')
    });
})
.catch((error)=>{
    console.log('Conexion a Mongo erronea');
})