import React, { useState } from 'react'
import offerBg from '../assets/offer-bg.png'
import useValidation from '../hooks/useValidation'
import { ValidateEmail } from '../utils/Validation'

const Offer = ({setNotifVisible, setNotifText}) => {
	const [email, setEmail] = useState('')
	const isValidEmail = useValidation(email, ValidateEmail)

	const clickSubscribe = () => {
		setNotifText('Вы успешно подписались!')
		setNotifVisible(true)
		setEmail('')
	}

	return (
		<div className='mt-2 relative'>
			<img src={offerBg} className='w-screen' />
			<div className='absolute top-[18%] left-[calc(50%-25.5vw)]'>
				<div className='font-OpenSans font-bold text-secondary text-[2vw] leading-100% flex'>
					<p>Подпишитесь и</p>
					<span className='mx-[6.5vw]' />
					<p>узнавайте и</p>
				</div>
				<div className='font-OpenSans font-bold text-[#E4BDC0] text-[2vw] leading-100% flex ml-[-3vw]'>
					<p>про эксклюзивные</p>
					<span className='mx-[6.2vw]' />
					<p>предложения,</p>
				</div>
				<div className='font-OpenSans font-bold text-[#BE8F92] text-[2vw] leading-100% flex ml-[1.2vw]'>
					<p>и предстоящие</p>
					<span className='mx-[5.7vw]' />
					<p>коллекции.</p>
				</div>
			</div>
			<div className='flex justify-center items-center py-1 bg-secondary absolute bottom-[71px] w-full'>
				<h3 className='text-primary font-Alumni font-bold text-5xl leading-100% tracking-wider mr-56'>ПРИСОЕДИНЯЙСЯ</h3>
				<div>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						className={'bg-transparent text-primary text-xl placeholder:text-primary placeholder:text-opacity-70 border px-4 w-[250px] h-[40px] outline-none transition-colors ' +  (isValidEmail ? 'border-green-600' : 'border-primary')}
						placeholder='Ваша эл. почта' 
					/>
					<button 
						onClick={clickSubscribe}
						className='text-quaternary bg-primary text-xl h-[40px] px-3.5 disabled:opacity-90 transition-opacity'
						disabled={!isValidEmail}
					>ПОДПИСАТЬСЯ</button>
				</div>
			</div>
		</div>
	)
}

export default Offer
