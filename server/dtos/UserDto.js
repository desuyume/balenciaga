module.exports = class UserDto {
	id;
	email;
	firstName;
	secondName;
	comments;

	constructor(model) {
		this.id = model._id;
		this.email = model.email;
		this.firstName = model.firstName;
		this.secondName = model.secondName;
		this.comments = model.comments;
	}
}