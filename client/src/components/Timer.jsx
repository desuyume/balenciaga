import React from 'react'
import useTimer from '../hooks/useTimer'

const Timer = () => {
	const { days, hours, minutes, seconds } = useTimer('2023-12-31T00:00:00')

	const formatDate = time => {
		return time < 10 ? `0${time}` : time
	}

	return (
		<div className='flex flex-col items-center'>
			<h2 className='font-bold text-xl leading-100% text-quaternary tracking-wider'>
				ЗИМНЯЯ КОЛЛЕКЦИЯ
			</h2>
			<div className='flex font-bold text-4xl leading-100% text-quaternary tracking-wider mt-2.5'>
				<div className='flex flex-col items-center'>
					<p>{days}</p>
					<p className='text-base font-normal tracking-normal'>дней</p>
				</div>
				<span className='mx-2'>:</span>
				<div className='flex flex-col items-center'>
					<p>{formatDate(hours)}</p>
					<p className='text-base font-normal tracking-normal'>часов</p>
				</div>
				<span className='mx-2'>:</span>
				<div className='flex flex-col items-center'>
					<p>{formatDate(minutes)}</p>
					<p className='text-base font-normal tracking-normal'>минут</p>
				</div>
				<span className='mx-2'>:</span>
				<div className='flex flex-col items-center'>
					<p>{formatDate(seconds)}</p>
					<p className='text-base font-normal tracking-normal'>секунд</p>
				</div>
			</div>
			<button className='bg-primary border-2 border-quaternary text-quaternary text-xl font-bold tracking-wide px-6 py-1 mt-5 hover:border-primary hover:text-primary hover:bg-quaternary transition-all'>
				ПОСМОТРЕТЬ
			</button>
		</div>
	)
}

export default Timer
