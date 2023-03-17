const Router = require('express').Router;
const userController = require('../controllers/UserController');

const userRouter = new Router();

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.post('/logout', userController.logout);
userRouter.get('/refresh', userController.refresh);

module.exports = userRouter;
