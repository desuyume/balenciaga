const bcrypt = require('bcrypt');
const UserDto = require('../dtos/UserDto');
const ApiError = require('../exceptions/ApiError');
const CommentModel = require('../models/CommentModel')
const UserModel = require('../models/UserModel');
const tokenService = require('./TokenService');

class CommentService {
	async add(text, refreshToken) {
		const userData = tokenService.validateRefreshToken(refreshToken);
		const user = await UserModel.findById(userData.id);
		const comment = await CommentModel.create({user: userData.id, text, date: new Date()})
		user.comments.push(comment.id);
		await user.save();
		return {comment, user: userData};
	}

	async remove(id, refreshToken) {
		const userData = tokenService.validateRefreshToken(refreshToken);
		const comment = await CommentModel.findByIdAndDelete(id);
		const user = await UserModel.findById(userData.id);
		user.updateOne({$pull: {comments: {_id: id}}});
		await user.save();
		return {comment, user: userData};
	}

	async getAll() {
		const comments = await CommentModel.find();
		return comments;
	}
	
	async getOne() {
		
	}
}

module.exports = new CommentService();
