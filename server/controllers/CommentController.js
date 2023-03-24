const commentService = require('../services/CommentService');

class CommentController {
	async add(req, res, next) {
		try {
			const { text, rating } = req.body;
			const refreshToken = req.cookies['refreshToken'];
			const commentData = await commentService.add(text, rating, refreshToken);
			return res.json(commentData);
		} catch (e) {
			next(e);
		}
	}

	async remove(req, res, next) {
		try {
			const { id } = req.body;
			const refreshToken = req.cookies['refreshToken'];
			const commentData = await commentService.remove(id, refreshToken);
			return res.json(commentData);
		} catch (e) {
			next(e);
		}
	}

	async getAll(req, res, next) {
		try {
			const comments = await commentService.getAll();
			return res.json(comments);
		} catch (e) {
			next(e);
		}
	}

	async getRandomCount(req, res, next) {
		try {
			const count = req.query.count;
			const comments = await commentService.getRandomCount(+count);
			return res.json(comments);
		} catch (e) {
			next(e);
		}
	}

	async likeComment(req, res, next) {
		try {
			const { commentId, isLiked } = req.body;
			const refreshToken = req.cookies['refreshToken'];
			const commentData = await commentService.likeComment(commentId, isLiked, refreshToken);
			return res.json(commentData);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new CommentController();
