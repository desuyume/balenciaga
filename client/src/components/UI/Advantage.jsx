import React from 'react'

const Advantage = ({img, text}) => {
	return (
		<div className='flex items-center mb-5 last:mb-0'>
			<div className='bg-primary h-[13px] w-[15vw] absolute left-0'></div>
			<img className='h-[10.8vh] ml-[4.8vw] mr-[1.66vw]' src={img} />
			<p className='font-OpenSans text-secondary text-3xl leading-100% w-[195px]'>
				{text}
			</p>
		</div>
	)
}

export default Advantage
