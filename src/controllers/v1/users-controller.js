const bcrypt = require('bcrypt');

const createUser = async (request, response) =>{
    
    /**
     * Con async y await
     * ** Para esto, la funcion createUser debe ser asyncrona, 
     * ** es decir debe ser declarada:
     * ** const createUser = async(request, response) => {
     * ** //codigo
     * ** }
     * ** para los otros metodos no es necesario usar async
     * ** puede ser removido
     * Notese que por definicion las funciones await no arrojan errores
     * Pero si pueden manejarse errores de ejecucion 
     * en un 
     * ** try{
     *      bcrypt.hash(params)
     * ** }catch(e){
     * **   handling(e)
     * ** }
     */

    const hash = await bcrypt.hash(request.body.password, 15)
    console.log('Contraseña cifrada', hash);
    response.send({
        status: 'Success', 
        message : 'Usuario Guardado'
    }); 

    /**
     * Con callbacks
     
    
    bcrypt.hash(request.body.password, 15 , (err, hash) => {
        if(!err){
            // En esta parte iria nuestra consulta a la base de datos
            console.log('Contraseña cifrada', hash);
            response.send({
                status: 'Success', 
                message : 'Usuario Guardado'
            }); 
        } else {
            console.log('Unable to encrypt the password')
            response.status(505).send({
                status : 'Error', 
                message : 'invalida password'
            })
        }
    });
    */
    /**
     * Con Promesas
    

    bcrypt.hash(request.body.password, 15)
    .then((hash)=>{
        // En esta parte iria nuestra consulta a la base de datos
        console.log('Contraseña cifrada', hash);
        response.send({
            status: 'Success', 
            message : 'Usuario Guardado'
        }); 
    })
    .catch((err)=>{
        console.log('Unable to encrypt the password')
        response.status(505).send({
            status : 'Error', 
            message : 'invalida password'
        })
    })  
    */


};
const deleteUser = (request, response) => {

};
const updateUser = (request, response) => {

};
const getUsers = (request, response) => {

};

module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUsers
}