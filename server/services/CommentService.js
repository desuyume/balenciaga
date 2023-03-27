const ApiError = require('../exceptions/ApiError');
const UserDto = require('../dtos/UserDto');
const CommentModel = require('../models/CommentModel');
const UserModel = require('../models/UserModel');
const { getRandomInt } = require('../utils/Random');
const tokenService = require('./TokenService');

class CommentService {
	async add(text, rating, refreshToken) {
		if (!text || !rating) {
			throw ApiError.BadRequest('Текст или рейтинг не указаны');
		}

		if (rating < 1 || rating > 5) {
			throw ApiError.BadRequest('Рейтинг должен быть от 1 до 5');
		}

		const userData = tokenService.validateRefreshToken(refreshToken);
		const user = await UserModel.findById(userData.id);

		if (!userData || !user) {
			throw ApiError.UnauthorizedError();
		}

		const comment = await CommentModel.create({
			userId: userData.id,
			text,
			date: new Date(),
			likes: getRandomInt(1, 11),
			rating
		});
		await user.updateOne({ $push: { comments: { _id: comment.id } } });
		await user.save();
		return { comment, user: userData };
	}

	async remove(id, refreshToken) {
		const userData = tokenService.validateRefreshToken(refreshToken);
		const comment = await CommentModel.findByIdAndDelete(id);
		const user = await UserModel.findById(userData.id);
		await user.updateOne({ $pull: { comments: { _id: id } } });
		await user.save();
		return { comment, user: userData };
	}

	async getAll() {
		const comments = await CommentModel.aggregate()
			.lookup({
				from: 'users',
				localField: 'userId',
				foreignField: '_id',
				as: 'user'
			})
			.unwind('$user')
			.project({
				text: 1,
				date: 1,
				likes: 1,
				rating: 1,
				userId: '$user._id',
				userName: '$user.name',
				userEmail: '$user.email',
				userImg: '$user.img',
				userLikedComments: '$user.likedComments'
			});

		return comments;
	}

	async getRandomCount(count) {
		if (!count) {
			throw ApiError.BadRequest('Не указано количество комментариев');
		}

		const pipeline = [{ $sample: { size: count } }];
		const comments = await CommentModel.aggregate(pipeline)
			.lookup({
				from: 'users',
				localField: 'userId',
				foreignField: '_id',
				as: 'user'
			})
			.unwind('$user')
			.project({
				text: 1,
				date: 1,
				likes: 1,
				rating: 1,
				userId: '$user._id',
				userName: '$user.name',
				userEmail: '$user.email',
				userImg: '$user.img',
				userLikedComments: '$user.likedComments'
			});

		return comments;
	}

	async likeComment(id, isLiked, refreshToken) {
		const userData = tokenService.validateRefreshToken(refreshToken);
		let comment;
		let user;
		if (!isLiked) {
			comment = await CommentModel.findOneAndUpdate(
				{ _id: id },
				{ $inc: { likes: 1 } },
				{
					new: true
				}
			);
			user = await UserModel.findOneAndUpdate(
				{ _id: userData.id },
				{ $push: { likedComments: comment._id } },
				{
					new: true
				}
			);
		} else {
			comment = await CommentModel.findOneAndUpdate(
				{ _id: id },
				{ $inc: { likes: -1 } },
				{
					new: true
				}
			);
			user = await UserModel.findOneAndUpdate(
				{ _id: userData.id },
				{ $pull: { likedComments: comment._id } },
				{
					new: true
				}
			);
		}
		await user.save();
		await comment.save();
		const userDto = new UserDto(user);
		return { comment, user: userDto };
	}
}

module.exports = new CommentService();
