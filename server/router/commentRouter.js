const Router = require('express').Router;
const сommentController = require('../controllers/CommentController');
const authMiddleware = require('../middlewares/AuthMiddleware');

const commentRouter = new Router();

commentRouter.post('/add', authMiddleware, сommentController.add);
commentRouter.post('/remove', authMiddleware, сommentController.remove);
commentRouter.get('/getAll', сommentController.getAll);
commentRouter.get('/getOne/:id', сommentController.getOne);

module.exports = commentRouter;
