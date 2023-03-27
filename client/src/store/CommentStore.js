import {makeAutoObservable} from 'mobx'
import { toast } from 'react-hot-toast'
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

	async add(text, rating) {
		try {
			const response = await CommentService.add(text, rating);
		} catch (e) {
			toast.error(e.response.data.message);
		}
	}

	async getAll() {
		this.setLoading(true);
		try {
			const response = await CommentService.getAll();
			this.setAllComments(response.data)
			return response;
		} catch (e) {
			toast.error(e.response.data.message);
		} finally {
			this.setLoading(false);
		}
	}

	async getOne() {
		try {
			const response = await CommentService.getOne();
			return response;
		} catch (e) {
			toast.error(e.response.data.message);
		}
	}

	async getRandomCount(count) {
		this.setLoading(true);
		try {
			const response = await CommentService.getRandomCount(count);
			this.setRandomComments(response.data)
			return response;
		} catch (e) {
			toast.error(e.response.data.message);
		} finally {
			this.setLoading(false);
		}
	}

	async likeComment(commentId, isLiked) {
		try {
			const response = await CommentService.likeComment(commentId, isLiked);
			return response;
		} catch (e) {
			toast.error(e.response.data.message);
		}
	}
}