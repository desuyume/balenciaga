import { useEffect, useState } from 'react'

export default function useValidation(value, validator) {
	const [isValid, setIsValid] = useState(false)

	useEffect(() => {
		if (validator(value)) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}
	}, [value])

	return isValid;
}