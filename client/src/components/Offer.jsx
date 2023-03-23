import React, { useState } from 'react'
import offerBg from '../assets/offer-bg.png'
import useValidation from '../hooks/useValidation'
import { ValidateEmail } from '../utils/Validation'

const Offer = () => {
	const [email, setEmail] = useState('')
	const isValidEmail = useValidation(email, ValidateEmail)

	return (
		<div className='mt-2 relative'>
			<img src={offerBg} className='w-screen' />
			<div className='flex justify-center items-center py-1 bg-secondary absolute bottom-[calc(23vh-56px)] w-full'>
				<h3 className='text-primary font-Alumni font-bold text-5xl leading-100% tracking-wider mr-56'>ПРИСОЕДИНЯЙСЯ</h3>
				<div>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						className={'bg-transparent text-primary text-xl placeholder:text-primary placeholder:text-opacity-70 border border-primary px-4 w-[250px] h-[40px] outline-none transition-colors ' +  (isValidEmail && 'border-green-600')}
						placeholder='Ваша эл. почта' 
					/>
					<button 
						className='text-quaternary bg-primary text-xl h-[40px] px-3.5 disabled:opacity-90 transition-opacity'
						disabled={!isValidEmail}
					>ПОДПИСАТЬСЯ</button>
				</div>
			</div>
		</div>
	)
}

export default Offer
