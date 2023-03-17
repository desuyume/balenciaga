const Router = require('express').Router;
const userRouter = require('./userRouter');
const commentRouter = require('./commentRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/comment', commentRouter);

module.exports = router;
