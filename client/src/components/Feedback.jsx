import React from 'react';
import feedbackImg from '../assets/feedback-img.webp';
import FeedbackForm from './UI/FeedbackForm'

const Feedback = () => {
	return (
		<div className='flex justify-center relative pt-32 pb-16'>
			<img className='top-2.5 left-0 absolute -z-10 pb-6' src={feedbackImg} />
			<FeedbackForm />
		</div>
	);
};

export default Feedback;