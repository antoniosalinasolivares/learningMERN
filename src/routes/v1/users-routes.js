const express = require('express');

const usersController = require('../../controllers/v1/users-controller');

const router = express.Router();
router.post('/create', usersController.createUser);
router.post('/delete', usersController.deleteUser);
router.post('/update', usersController.updateUser);
router.post('/get-all', usersController.getUsers);

module.exports = router;