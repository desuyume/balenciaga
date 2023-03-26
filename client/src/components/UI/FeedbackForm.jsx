import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import useValidation from '../../hooks/useValidation'
import {
	headerRules,
	messageRules,
	nameRules,
	onInputRules,
} from '../../utils/Rules'
import {
	ValidateEmail,
	ValidateHeader,
	ValidateMessage,
	ValidateName,
} from '../../utils/Validation'
import FormInput from './FormInput'
import InputRules from './InputRules'

const FeedbackForm = () => {
	const [header, setHeader] = useState('')
	const [headerRuleVisible, setHeaderRuleVisible] = useState(false)
	const isValidHeader = useValidation(header, ValidateHeader)
	const [name, setName] = useState('')
	const [nameRuleVisible, setNameRuleVisible] = useState(false)
	const isValidName = useValidation(name, ValidateName)
	const [email, setEmail] = useState('')
	const isValidEmail = useValidation(email, ValidateEmail)
	const [message, setMessage] = useState('')
	const [messageRuleVisible, setMessageRuleVisible] = useState(false)
	const isValidMessage = useValidation(message, ValidateMessage)

	const clickSend = () => {
		setHeader('')
		setName('')
		setEmail('')
		setMessage('')
		toast.success('Успешно отправлено!')
	}

	return (
		<form
			onClick={e => e.preventDefault()}
			className='bg-secondary w-[650px] h-[600px] flex flex-col items-center ml-[152px]'
		>
			<h2 className='text-primary text-4xl leading-100% font-bold mt-9 tracking-wider mb-15'>
				СВЯЗАТЬСЯ С НАМИ
			</h2>
			<div className='flex relative'>
				<FormInput
					value={header}
					onChange={e => setHeader(e.target.value)}
					onInput={() => onInputRules(isValidHeader, setHeaderRuleVisible)}
					onBlur={() => setHeaderRuleVisible(false)}
					placeholder='Заголовок'
					isvalid={isValidHeader ? 1 : 0}
				/>
				<InputRules rules={headerRules} visible={headerRuleVisible} />
			</div>
			<div className='flex relative'>
				<FormInput
					value={name}
					onChange={e => setName(e.target.value)}
					onInput={() => onInputRules(isValidName, setNameRuleVisible)}
					onBlur={() => setNameRuleVisible(false)}
					placeholder='Ваше имя'
					isvalid={isValidName ? 1 : 0}
				/>
				<InputRules rules={nameRules} visible={nameRuleVisible} />
			</div>
			<FormInput
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Ваш электронный адрес'
				isvalid={isValidEmail ? 1 : 0}
			/>
			<div className='flex relative'>
				<textarea
					value={message}
					onChange={e => setMessage(e.target.value)}
					onInput={() => onInputRules(isValidMessage, setMessageRuleVisible)}
					onBlur={() => setMessageRuleVisible(false)}
					placeholder='Сообщение...'
					className={
						'resize-none outline-none border bg-transparent w-[400px] h-[100px] mt-4 text-xl text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 pt-2.5 transition-colors ' +
						(isValidMessage ? 'border-green-600' : 'border-primary')
					}
				/>
				<InputRules rules={messageRules} visible={messageRuleVisible} />
			</div>

			<button
				onClick={clickSend}
				className='bg-primary text-quaternary text-xl px-16 py-1.5 mt-11 disabled:opacity-90 transition-opacity'
				disabled={
					!(isValidHeader && isValidName && isValidEmail && isValidMessage)
				}
			>
				ОТПРАВИТЬ
			</button>
		</form>
	)
}

export default FeedbackForm
