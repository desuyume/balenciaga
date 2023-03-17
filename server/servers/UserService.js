const bcrypt = require('bcrypt');
const UserDto = require('../dtos/UserDto');
const ApiError = require('../exceptions/ApiError');
const UserModel = require('../models/UserModel');
const tokenService = require('./TokenService');

class UserService {
	async registration(email, password, firstName, secondName) {
		const candidate = await UserModel.findOne({ email });

		if (candidate) {
			throw ApiError.BadRequest(
				`Пользователь с эл. почтой ${email} уже существует.`
			);
		}

		const hashPassword = bcrypt.hashSync(password, 3);
		const user = await UserModel.create({
			email,
			password: hashPassword,
			firstName,
			secondName
		});
		const userDto = new UserDto(user);

		const tokens = tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return { ...tokens, user: userDto };
	}

	async login(email, password) {
		const user = await UserModel.findOne({ email });
		if (!user) {
			throw ApiError.BadRequest(
				`Пользователя с эл.почтой ${email} не существует.`
			);
		}

		const isPassEqual = await bcrypt.compare(password, user.password);
		if (!isPassEqual) {
			throw ApiError.BadRequest('Неверный пароль');
		}

		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return { ...tokens, user: userDto };
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken);
		return token;
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError();
		}

		const userData = tokenService.validateRefreshToken(refreshToken);
		const tokenFromDb = await tokenService.findToken(refreshToken);
		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError();
		}

		const user = await UserModel.findById(userData.id);
		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return { ...tokens, user: userDto };
	}
}

module.exports = new UserService();
