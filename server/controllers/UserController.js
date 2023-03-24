const uuid = require('uuid');
const path = require('path')
const userService = require('../services/UserService');
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/ApiError')

class UserController {
	async registration(req, res, next) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
			}

			const { email, password, name } = req.body;
			const {img} = req.files || '';
			let fileName;

			if (img) {
				fileName = uuid.v4() + ".jpg";
				img.mv(path.resolve(__dirname, '..', 'static', fileName));
			} else {
				fileName = "blank-avatar.webp"
			}

			const userData = await userService.registration(email, password, name, fileName);
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			return res.json(userData);
		} catch (e) {
			next(e);
		}
	}

	async login(req, res, next) {
		try {
			const { email, password } = req.body;
			const userData = await userService.login(email, password);
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			return res.json(userData);
		} catch (e) {
			next(e);
		}
	}

	async logout(req, res, next) {
		try {
			const { refreshToken } = req.cookies;
			const token = await userService.logout(refreshToken);
			res.clearCookie('refreshToken');
			return res.json(token);
		} catch (e) {
			next(e);
		}
	}

	async refresh(req, res, next) {
		try {
			const { refreshToken } = req.cookies;
			const userData = await userService.refresh(refreshToken);
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			return res.json(userData);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new UserController();
