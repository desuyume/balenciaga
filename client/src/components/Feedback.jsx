import React from 'react';
import feedbackImg from '../assets/feedback-img.webp';
import FeedbackForm from './UI/FeedbackForm'

const Feedback = () => {
	return (
		<div id='feedback' className='flex justify-center relative pt-[122px] pb-[67px] z-30'>
			<img className='top-2.5 right-[calc(50%+84px)] absolute -z-10 pb-6' src={feedbackImg} />
			<FeedbackForm />
		</div>
	);
};

export default Feedback;