import $api from '../http'

export default class CommentService {
	static async add(text, rating) {
		return $api.post('/comment/add', {text, rating})
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