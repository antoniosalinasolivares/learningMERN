import productController from '../../controllers/products-controller';
import express from 'express';

const productsRouter = express.Router();
productsRouter.post('/create', productController.createUser);
productsRouter.post('/delete', productController.deleteUser);
productsRouter.post('/get-all', productController.getUsers); 

export default productsRouter;