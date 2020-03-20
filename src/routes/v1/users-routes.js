import userController from '../../controllers/users-controllers';
import express from 'express';

const usersRouter = express.Router();
usersRouter.post('/create', userController.createUser);
usersRouter.post('/update', userController.updateUser);
usersRouter.post('/delete', userController.deleteUser);
usersRouter.post('/get-all', userController.getUsers); 

export default usersRouter;