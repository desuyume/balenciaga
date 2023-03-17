const commentService = require('../servers/CommentService')

class CommentController {
	async add(req, res, next) {
		try {
			const { text } = req.body;
			const refreshToken = req.cookies['refreshToken'];
			const commentData = await commentService.add(text, refreshToken);
			return res.json(commentData);
		} catch (e) {
			next(e);
		}
	}

	async remove(req, res, next) {
		try {
			const {id} = req.body;
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
			return res.json(comments)
		} catch (e) {
			next(e);
		}
	}

	async getOne(req, res, next) {
		try {
			
			return res.json()
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new CommentController();