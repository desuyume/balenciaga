import $api from '../http'

export default class CommentService {
	static async add(text) {
		return $api.post('/comment/add', {text})
	}

	static async remove(id) {
		return $api.post('/comment/remove', {id})
	}

	static async likeComment(commentId, isLiked) {
		return $api.post('/comment/like', {commentId, isLiked})
	}

	static async getAll() {
		return $api.get('/comment/getAll')
	}

	static async getRandomCount(count) {
		return $api.get(`/comment/getRandomCount?count=${count}`)
	}
}