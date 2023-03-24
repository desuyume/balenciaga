import $api from '../http'

export default class AuthService {
	static async login(email, password) {
		return $api.post('/user/login', {email, password})
	}

	static async registration(formData) {
		return $api.post('/user/registration', formData)
	}

	static async logout() {
		return $api.post('/user/logout')
	}
}