const { Schema, model, SchemaTypes } = require('mongoose');

const UserSchema = new Schema({
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	img: { type: String, default: 'none' },
	comments: { type: [Schema.Types.ObjectId], ref: 'Comment' },
	likedComments: { type: [Schema.Types.ObjectId], ref: 'Comment' }
});

module.exports = model('User', UserSchema);
