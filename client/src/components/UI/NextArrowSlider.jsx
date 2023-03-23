import React from 'react';
import nextArrowImg from '../../assets/next-arrow-slider.svg'

const NextArrowSlider = ({onClick}) => {
	return (
		<div onClick={onClick} className='w-[45px] h-full bg-tertiary bg-opacity-25 hover:bg-opacity-50 transition-all flex justify-center items-center absolute right-0 top-0 z-10 cursor-pointer'>
			<img src={nextArrowImg} />
		</div>
	);
};

export default NextArrowSlider;