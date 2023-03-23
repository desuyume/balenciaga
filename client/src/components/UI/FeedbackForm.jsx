import React, { useState } from 'react'
import useValidation from '../../hooks/useValidation'
import { ValidateEmail, ValidateHeader, ValidateMessage, ValidateName } from '../../utils/Validation'
import FormInput from './FormInput'

const FeedbackForm = () => {
	const [header, setHeader] = useState('')
	const isValidHeader = useValidation(header, ValidateHeader)
	const [name, setName] = useState('')
	const isValidName = useValidation(name, ValidateName)
	const [email, setEmail] = useState('')
	const isValidEmail = useValidation(email, ValidateEmail)
	const [message, setMessage] = useState('')
	const isValidMessage = useValidation(message, ValidateMessage)

	return (
		<form className='bg-secondary w-[650px] h-[600px] flex flex-col items-center ml-[152px]'>
			<h2 className='text-primary text-4xl leading-100% font-bold mt-9 tracking-wider mb-15'>СВЯЗАТЬСЯ С НАМИ</h2>
			<FormInput
				value={header}
				onChange={e => setHeader(e.target.value)}
				placeholder='Заголовок'
				isvalid={isValidHeader ? 1 : 0}
			/>
			<FormInput
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Ваше имя'
				isvalid={isValidName ? 1 : 0}
			/>
			<FormInput
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Ваш электронный адрес'
				isvalid={isValidEmail ? 1 : 0}
			/>
			<textarea
				value={message}
				onChange={e => setMessage(e.target.value)}
				placeholder='Сообщение...'
				className={'resize-none outline-none border bg-transparent w-[400px] h-[100px] mt-4 text-xl text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 pt-2.5 transition-colors ' + (isValidMessage ? 'border-green-600' : 'border-primary')}
			/>
			<button 
				className='bg-primary text-quaternary text-xl px-16 py-1.5 mt-11 disabled:opacity-90 transition-opacity'
				disabled={!(isValidHeader && isValidName && isValidEmail && isValidMessage)}
			>ОТПРАВИТЬ</button>
		</form>
	)
}

export default FeedbackForm
