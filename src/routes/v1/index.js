import productsRouter from './products-routes';
import usersRouter from './users-routes';

export default (app) => {
    app.use('/api/v1/users', usersRouter);
    app.use('/api/v1/products', productsRouter);
}

