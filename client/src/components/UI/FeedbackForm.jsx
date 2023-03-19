import React, { useState } from 'react'
import FormInput from './FormInput'

const FeedbackForm = () => {
	const [title, setTitle] = useState('')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	return (
		<form className='bg-secondary w-650px h-600px flex flex-col items-center ml-12.2vh'>
			<h2 className='text-primary text-4xl leading-100% font-bold mt-9 tracking-wider mb-15'>СВЯЗАТЬСЯ С НАМИ</h2>
			<FormInput
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder='Заголовок'
			/>
			<FormInput
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Ваше имя'
			/>
			<FormInput
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Ваш электронный адрес'
			/>
			<textarea
				value={message}
				onChange={e => setMessage(e.target.value)}
				placeholder='Сообщение...'
				className='resize-none outline-none border border-primary bg-transparent w-400px h-100px mt-4 text-xl text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 pt-2.5'
			/>
			<button className='bg-primary text-quaternary text-xl px-16 py-1.5 mt-11'>ОТПРАВИТЬ</button>
		</form>
	)
}

export default FeedbackForm
