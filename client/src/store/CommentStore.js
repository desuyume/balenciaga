import {makeAutoObservable} from 'mobx'
import CommentService from '../services/CommentService'

export default class CommentStore {
	allComments = [];
	randomComments = [];

	constructor() {
		this._isLoading = true;
		makeAutoObservable(this);
	}

	setLoading(bool) {
		this._isLoading = bool; 
	}
	setAllComments(comments) {
		this.allComments = comments;
	}
	setRandomComments(comments) {
		this.randomComments = comments;
	}
	getLoading() {
		return this._isLoading; 
	}
	getAllComments() {
		return this.allComments;
	}
	getRandomComments() {
		return this.randomComments;
	}

	async add(text) {
		try {
			const response = await CommentService.add(text);
			this._comments.push(response.data);
			console.log(response);
		} catch (e) {
			console.log(e.response.data.message);
		}
	}

	async remove(id) {
		try {
			const response = await CommentService.remove(id);
			this._comments = this._comments.filter(comment => comment._id !== id)
			console.log(response);
		} catch (e) {
			console.log(e.response.data.message);
		}
	}

	async getAll() {
		try {
			const response = await CommentService.getAll();
			this.setAllComments(response.data)
			return response;
		} catch (e) {
			console.log(e.response.data.message);
		}
	}

	async getOne() {
		try {
			const response = await CommentService.getOne();
			return response;
		} catch (e) {
			console.log(e.response.data.message);
		}
	}

	async getRandomCount(count) {
		this.setLoading(true);
		try {
			const response = await CommentService.getRandomCount(count);
			this.setRandomComments(response.data)
			// console.log(response.data)
			// console.log(this.getRandomComments())
			return response;
		} catch (e) {
			console.log(e.response.data.message);
		} finally {
			this.setLoading(false);
		}
	}
}