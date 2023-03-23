import React, { useEffect, useRef, useState } from 'react'
import timelineImg from '../../assets/timeline-img.svg'
import useObserveAnim from '../../hooks/useObserveAnim'
import useObserver from '../../hooks/useObserver'

const Timeline = () => {
	const timeRef = useRef()
	
	useObserveAnim(timeRef, 'animate-timeAnim')

	return (
		<>
			<p className='font-OpenSans font-light bottom-[40px] left-[-60px] text-6xl leading-100% text-secondary absolute'>
				1917
			</p>
			<p className='font-OpenSans font-semibold bottom-[40px] right-[-70px] text-7xl leading-100% text-secondary absolute'>
				2023
			</p>
			<img src={timelineImg} className='z-10' />
			<div ref={timeRef} className='w-[5px] h-5 bg-secondary absolute top-[4px] left-[15px] z-10'>
			</div>
		</>
	)
}

export default Timeline
