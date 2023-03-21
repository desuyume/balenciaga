import React from 'react'
import Advantage from './UI/Advantage'
import dressImg from '../assets/dress.webp'
import carImg from '../assets/car.webp'
import clothesImg from '../assets/clothes.webp'
import womanImg from '../assets/advantages-img.webp'
import zoomedClothImg from '../assets/cloth-zoom-img.webp'

const Advantages = () => {
	return (
		<div className='bg-advantagesBg bg-cover bg-no-repeat bg-center h-screen flex justify-center items-center'>
			<div className='w-[76vw] h-[59.9vh] bg-primary bg-opacity-[.45] flex items-center'>
				<div className='flex flex-col justify-center h-full'>
					<Advantage
						img={carImg}
						text='Очень быстрая доставка'
					/>
					<Advantage
						img={clothesImg}
						text='Лучшее качество на рынке'
					/>
					<Advantage
						img={dressImg}
						text='Одежда на любой вкус'
					/>
				</div>
				<div className='relative ml-[14.9vw]'>
					<img src={womanImg} className='h-screen' />
					<img className='absolute left-[11vw] bottom-[36vh]' src={zoomedClothImg} />
					<p className='font-OpenSans text-secondary text-6xl leading-100% text-center absolute left-[14vw] bottom-[14vh]'>
						100%
						<br />
						<span className='text-[45px]'>ТКАНЬ</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Advantages