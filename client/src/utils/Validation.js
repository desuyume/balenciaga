export function ValidateEmail(email) {
	const validRegex = /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;

	return email.match(validRegex);
}

export function ValidateName(name) {
	const validRegex = /^[a-zA-Zа-яёА-ЯЁ]{1,12}$/;

	return name.match(validRegex);
}

export function ValidatePassword(password) {
	const validRegex = /^.{3,32}$/;

	return password.match(validRegex);
}

export function ValidateMessage(message) {
	const words = message.split(' ');

	return words.length <= 255 && message;
}

export function ValidateHeader(header) {
	const validRegex = /^.{5,50}$/;

	return header.match(validRegex);
}