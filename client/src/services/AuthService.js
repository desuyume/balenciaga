import $api from '../http'

export default class AuthService {
	static async login(email, password) {
		return $api.post('/user/login', {email, password})
	}

	static async registration(email, password, name) {
		return $api.post('/user/registration', {email, password, name})
	}

	static async logout() {
		return $api.post('/user/logout')
	}
}