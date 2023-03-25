import React from 'react'
import feedbackImg from '../assets/feedback-img.webp'
import FeedbackForm from './UI/FeedbackForm'
import lineImg from '../assets/line-img.svg'

const Feedback = ({ setNotifVisible, setNotifText }) => {
	return (
		<div
			id='feedback'
			className='flex justify-center relative pt-[122px] pb-[67px] z-30'
		>
			<img
				className='top-2.5 right-[calc(50%+84px)] absolute -z-10 pb-6'
				src={feedbackImg}
			/>
			<FeedbackForm
				setNotifVisible={setNotifVisible}
				setNotifText={setNotifText}
			/>
			<img className='absolute top-[-16px] right-[calc(50%+610px)]' src={lineImg} />
			<img className='absolute top-[-16px] right-[calc(50%+60px)]' src={lineImg} />
		</div>
	)
}

export default Feedback
