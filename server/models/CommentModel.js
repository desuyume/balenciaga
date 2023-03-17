const { Schema, model } = require('mongoose');

const CommentModel = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	text: { type: String, required: true },
	date: { type: Date, required: true },
	likes: { type: Number, default: 0 }
});

module.exports = model('Comment', CommentModel);
