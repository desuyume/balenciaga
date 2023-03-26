export const onInputRules = (isValid, setVisible) => {
	if (!isValid) {
		setVisible(true)
	} else {
		setVisible(false)
	}
}

export const nameRules = ["Только русские и английские буквы", "Имя должно быть от 1 до 12 символов"];

export const passwordRules = ["Пароль может состоять только из английских букв, цифр и спец.символов (!, @, #, $, %, ^, &, *)", "Пароль должен быть от 3 до 32 символов"];

export const messageRules = ["Количество слов в сообщении не должно превышать 70"];

export const headerRules = ["Заголовок должен быть от 5 до 50 символов"];

export const ratingRules = ["Оценка рейтинга может быть от 1 до 5"];