import $api from '../http'

export default class CommentService {
	static async add(text) {
		return $api.post('/comment/add', {text})
	}

	static async remove(id) {
		return $api.post('/comment/remove', {id})
	}

	static async getAll() {
		return $api.get('/comment/getAll')
	}

	static async getOne() {
		return $api.get('/comment/getOne')
	}

	static async getRandomCount(count) {
		return $api.get(`/comment/getAll?count=${count}`)
	}
}