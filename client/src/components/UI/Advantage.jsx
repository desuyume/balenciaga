import React, { useRef } from 'react'
import useObserveAnim from '../../hooks/useObserveAnim'

const Advantage = ({img, text, anim}) => {
	const advRef = useRef()

	useObserveAnim(advRef, 'animate-advAppear')

	return (
		<div ref={advRef} className='flex items-center mb-5 last:mb-0 opacity-0'>
			<div className='bg-primary h-[13px] w-[15vw] absolute left-0'></div>
			<div className='bg-primary h-[13px] w-[calc(85vw-280px)] absolute left-[calc(15vw+330px)]'></div>
			<img className={'h-[10.8vh] ml-[4.8vw] mr-[1.66vw] z-10 ' + (anim === 'car' && 'animate-carAnim')} src={img} />
			<p className='font-OpenSans text-secondary text-3xl leading-100% w-[195px] z-10'>
				{text}
			</p>
		</div>
	)
}

export default Advantage
