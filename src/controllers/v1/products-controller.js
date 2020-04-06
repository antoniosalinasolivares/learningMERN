const Products = require('../../mongo/models/products');

const createProduct = async (request, response) =>{
    const {title, description, price, image, user} = request.body;
    try {
        await Products.create({
            title,
            description,
            price,
            image,
            user
        })
        response.send({
            status: 'Success',
            message : 'Producto Guardado'
        })
    } catch (error) {
        response.status(505).send({
            status : 'Error',
            message : error.message
        })
    }
};

const deleteProduct = (request, Response) =>{

};

const getProducts = (request, Response) =>{

};

module.exports = {
    createProduct,
    deleteProduct,
    getProducts
}