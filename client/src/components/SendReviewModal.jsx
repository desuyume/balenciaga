import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Context } from '..'
import useValidation from '../hooks/useValidation'
import { onInputRules, messageRules, ratingRules } from '../utils/Rules'
import { ValidateMessage, ValidateRating } from '../utils/Validation'
import InputRules from './UI/InputRules'
import Modal from './UI/Modal'

const SendReviewModal = ({ visible, setVisible }) => {
	const { userStore, commentStore } = useContext(Context)
	const [text, setText] = useState('')
	const [textRuleVisible, setTextRuleVisible] = useState(false)
	const isValidText = useValidation(text, ValidateMessage)
	const [rating, setRating] = useState('')
	const [ratingRuleVisible, setRatingRuleVisible] = useState(false)
	const isValidRating = useValidation(rating, ValidateRating)

	const clickSend = () => {
		commentStore.add(text, rating).then(() => {
			if (userStore.isAuth && text && rating) {
				toast.success('Отзыв успешно добавлен!')
				setVisible(false)
				setText('')
				setRating('')
			}
		})
	}

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<h2 className='font-OpenSans font-semibold text-primary text-[40px] mb-[30px] leading-100%'>
				Оставить отзыв
			</h2>
			<div className='flex relative'>
				<textarea
					value={text}
					onChange={e => setText(e.target.value)}
					onInput={() => onInputRules(isValidText, setTextRuleVisible)}
					onBlur={() => setTextRuleVisible(false)}
					placeholder='Ваш отзыв...'
					className={
						'border-b bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 pt-2.5 pb-12 mb-[5.4vh] resize-none ' +
						(isValidText ? 'border-green-600' : 'border-primary')
					}
				/>
				<InputRules rules={messageRules} visible={textRuleVisible} />
			</div>
			<div className='flex relative'>
				<input
					value={rating}
					onChange={e => setRating(e.target.value)}
					onInput={() => onInputRules(isValidRating, setRatingRuleVisible)}
					onBlur={() => setRatingRuleVisible(false)}
					placeholder='Ваша оценка...'
					type='number'
					min='1'
					max='5'
					className={
						'border-b bg-transparent outline-none w-[20vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 py-2.5 mb-[10.8vh] ' +
						(isValidRating ? 'border-green-600' : 'border-primary')
					}
				/>
				<InputRules rules={ratingRules} visible={ratingRuleVisible} />
			</div>
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
