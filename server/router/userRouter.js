const Router = require('express').Router;
const userController = require('../controllers/UserController');
const { body } = require('express-validator');

const userRouter = new Router();

userRouter.post('/registration',
	body('email').isEmail(),
	body('password').isLength({min: 3, max: 32}),
	body('name').isLength({min: 1, max: 12}),
	userController.registration);
userRouter.post('/login', userController.login);
userRouter.post('/logout', userController.logout);
userRouter.get('/refresh', userController.refresh);

module.exports = userRouter;
