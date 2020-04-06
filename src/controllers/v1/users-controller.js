const bcrypt = require('bcrypt');
const Users = require('../../mongo/models/users');

const createUser = async (request, response) =>{
    /*const {username, email, password, data } = request.body;
    bcrypt.hash(password, 15)
    .then((hash) =>{
        Users.create({
            username,
            email,
            data,
            password : hash
        })
    }).then(()=>{
        response.send({
            status: 'Success',
            message: 'Usuario Creado'
        })
    }).catch((error)=>{
        response.status(505).send({
            status : 'Error', 
            message : `error : ${error.message}` 
        })
    })*/
    try {
        const {username, email, password, data } = request.body;
        const hash = await bcrypt.hash(password, 15);
        await Users.create({
            username,
            email,
            data,
            password : hash
        })
        response.send({
            status: 'Success', 
            message : 'Usuario Guardado'
        }); 
    } catch (error) {
            response.status(505).send({
                status : 'Error', 
                message : `error : ${error.message}` 
            })
    }
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