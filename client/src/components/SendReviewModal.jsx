import React, { useContext, useState } from 'react'
import { Context } from '..'
import useValidation from '../hooks/useValidation'
import { ValidateMessage, ValidateRating } from '../utils/Validation'
import Modal from './UI/Modal'

const SendReviewModal = ({ visible, setVisible }) => {
	const { userStore, commentStore } = useContext(Context)
	const [text, setText] = useState('')
	const isValidText = useValidation(text, ValidateMessage)
	const [rating, setRating] = useState('')
	const isValidRating = useValidation(rating, ValidateRating)

	const clickSend = () => {
		if (userStore.isAuth) {
			commentStore.add(text, rating)
			setVisible(false)
			setText('')
			setRating('')
		} else {
			console.log('нужно авторизоваться');
		}
	}

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<h2 className='font-OpenSans font-semibold text-primary text-[40px] mb-[30px] leading-100%'>
				Оставить отзыв
			</h2>
			<textarea
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder='Ваш отзыв...'
				className={'border-b bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 pt-2.5 pb-12 mb-[5.4vh] resize-none ' + (isValidText ? 'border-green-600' : 'border-primary')}
			/>
			<input
				value={rating}
				onChange={e => setRating(e.target.value)}
				placeholder='Ваша оценка...'
				type='number'
				min='1'
				max='5'
				className={'border-b bg-transparent outline-none w-[20vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 py-2.5 mb-[10.8vh] ' + (isValidRating ? 'border-green-600' : 'border-primary')}
			/>
			<button 
				onClick={clickSend}
				className='bg-primary text-quaternary text-xl leading-100% py-2.5 px-24'
			>
				Отправить
			</button>
		</Modal>
	)
}

export default SendReviewModal
