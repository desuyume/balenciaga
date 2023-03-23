export function normalizeDate(date) {
	const normalizedDate = new Date(date)

	return `${addingZero(normalizedDate.getHours())}:${addingZero(
		normalizedDate.getMinutes()
	)} ${addingZero(normalizedDate.getDate())}.${addingZero(
		normalizedDate.getMonth()+1
	)}.${normalizedDate.getFullYear()}`
}

export function addingZero(num) {
	return num < 10 ? `0${num}` : num
}
