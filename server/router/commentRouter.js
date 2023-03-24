const Router = require('express').Router;
const сommentController = require('../controllers/CommentController');
const authMiddleware = require('../middlewares/AuthMiddleware');

const commentRouter = new Router();

commentRouter.post('/add', authMiddleware, сommentController.add);
commentRouter.post('/remove', authMiddleware, сommentController.remove);
commentRouter.post('/like', authMiddleware, сommentController.likeComment);
commentRouter.get('/getAll', сommentController.getAll);
commentRouter.get('/getRandomCount', сommentController.getRandomCount);

module.exports = commentRouter;
