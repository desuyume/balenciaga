const { Schema, model } = require('mongoose');

const CommentModel = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	text: { type: String, required: true },
	date: { type: Date, required: true },
	likes: { type: Number, default: 0 },
	rating: { type: Number, required: true, min: 1, max: 5 }
});

module.exports = model('Comment', CommentModel);
