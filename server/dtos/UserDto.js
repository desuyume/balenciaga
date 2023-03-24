module.exports = class UserDto {
	id;
	email;
	name;
	img;
	comments;
	likedComments;

	constructor(model) {
		this.id = model._id;
		this.email = model.email;
		this.name = model.name;
		this.img = model.img;
		this.comments = model.comments;
		this.likedComments = model.likedComments;
	}
}