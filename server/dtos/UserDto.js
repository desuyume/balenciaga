module.exports = class UserDto {
	id;
	email;
	name;
	comments;

	constructor(model) {
		this.id = model._id;
		this.email = model.email;
		this.name = model.name;
		this.comments = model.comments;
	}
}