/**
 * 
 * Este archivo demuestra cómp hacer exportaciones de un módulo completo, donde al requerir el nombre del archivo, obtendremos
 * los metodos que especifiquemos.
 * Esta forma nos facilita exportar funciones de forma modular, el detalles es que tienen que funcionar de forma autónoma.
 * 
 */
/*
 module.exports.info = function info(text){
    console.log(text);
    return(text);
}

module.exports.error = function error(text){
    return text;
}
*/
info = (text)=>{
    console.log(text);
    return(text);
}

error = (text) =>{
    return text;
}

module.exports.info = info;

module.exports.error = error;




