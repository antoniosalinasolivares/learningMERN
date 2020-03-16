/**
 * 
 * Este archivo demuestra cómp hacer exportaciones de un módulo completo, donde al requerir el nombre del archivo, obtendremos
 * todos los metodos que incluyamos al final. en este caso.
 * 
 */
let info = (text) => {
    console.log(text);
    return(text);
}

let error = (text) => {
    return text;
}

let test = (text) => {
    console.log('Hey i do work!')
}

/**
 * Definiremos el modulo de exportacion como un objeto que mapea a las funciones con un nombre específico.
 * entonces, para usar las funciones de éste módulo, debemos:
 * 
 * let md = require('PATH_TO_THIS_FILE');
 * md.foo();
 *  
 */

module.exports = {
    info:info,
    error: error,
    test:test
};