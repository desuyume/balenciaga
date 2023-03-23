const bcrypt = require('bcrypt');
const UserDto = require('../dtos/UserDto');
const ApiError = require('../exceptions/ApiError');
const CommentModel = require('../models/CommentModel')
const UserModel = require('../models/UserModel');
const { getRandomInt } = require('../utils/Random')
const tokenService = require('./TokenService');
const UserService = require('./UserService')

class CommentService {
	async add(text, refreshToken) {
		const userData = tokenService.validateRefreshToken(refreshToken);
		const user = await UserModel.findById(userData.id);
		const comment = await CommentModel.create({user: userData.id, text, date: new Date(), likes: getRandomInt(1, 11)})
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

	async getRandomCount(count) {
		if (!count) {
			throw ApiError.BadRequest('Не указано количество комментариев');
		}

  	const pipeline = [{ $sample: { size: count } }];
  	let comments = await CommentModel.aggregate(pipeline);

		comments = comments.map(async (comment) => {
			const userData = await UserService.getById(comment.user);
			return {comment, user: userData};
		})

		console.log(comments)
  	return comments;
	}
}

module.exports = new CommentService();
