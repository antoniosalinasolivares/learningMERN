const createUser = (request, response) =>{
    response.send({status:'ok', message:'user created'});
    console.log('created user');
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