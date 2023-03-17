const { Schema, model, SchemaTypes } = require('mongoose');

const UserSchema = new Schema({
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	firstName: { type: String, required: true },
	secondName: { type: String, required: true },
	comments: { type: [Schema.Types.ObjectId], ref: 'Comment' }
});

module.exports = model('User', UserSchema);
