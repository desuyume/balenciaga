import React from 'react';
import prevArrowImg from '../../assets/prev-arrow-slider.svg'

const PrevArrowSlider = ({onClick}) => {
	return (
		<div onClick={onClick} className='w-[45px] h-full bg-primary bg-opacity-25 hover:bg-opacity-50 transition-all flex justify-center items-center absolute z-10 cursor-pointer'>
			<img src={prevArrowImg} />
		</div>
	);
};

export default PrevArrowSlider;