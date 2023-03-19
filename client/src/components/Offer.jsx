import React, { useState } from 'react'
import offerBg from '../assets/offer-bg.png'
import { ValidateEmail } from '../utils/Validation'

const Offer = () => {
	const [value, setValue] = useState('')

	const clickSubscribe = () => {
		if (!ValidateEmail(value)) {
			console.log('неверный формат эл. адреса')
		} else {
			console.log('верный формат почты');
		}
	}

	return (
		<div className='mt-2 relative'>
			<img src={offerBg} className='w-screen' />
			<div className='flex justify-center items-center py-1 bg-secondary absolute bottom-[calc(23vh-56px)] w-full'>
				<h3 className='text-primary font-Alumni font-bold text-5xl leading-100% tracking-wider mr-56'>ПРИСОЕДИНЯЙСЯ</h3>
				<div>
					<input
						value={value}
						onChange={e => setValue(e.target.value)}
						className='bg-transparent text-primary text-xl placeholder:text-primary placeholder:text-opacity-70 border border-primary pl-4 w-250px h-40px outline-none' 
						placeholder='Ваша эл. почта' 
					/>
					<button 
						onClick={clickSubscribe}
						className='text-quaternary bg-primary text-xl h-40px px-3.5'
					>ПОДПИСАТЬСЯ</button>
				</div>
			</div>
		</div>
	)
}

export default Offer
