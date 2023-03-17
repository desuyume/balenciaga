import React, { useState } from 'react'
import firstScreenImg1 from '../assets/firstscreen-img1.jpg'
import firstScreenImg2 from '../assets/firstscreen-img2.jpg'
import Timer from './Timer'
import MainTitle from './UI/MainTitle'
import arrow from '../assets/arrow.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const FirstScreen = () => {
	const [images, setImages] = useState([firstScreenImg1, firstScreenImg2])
	const [activeImgIndex, setActiveImgIndex] = useState(0)
	const [activeImg, setActiveImg] = useState(images[activeImgIndex])

	const switchImg = () => {
		if (activeImgIndex == 1) {
			setActiveImgIndex(0)
		} else {
			setActiveImgIndex(activeImgIndex + 1)
			setActiveImg(images[activeImgIndex])
		}

		console.log(activeImgIndex)
		console.log(activeImg)
	}

	return (
		<div className='bg-firstScreenImg1 pt-13.7vh bg-no-repeat bg-top bg-cover bg-opacity-90 h-screen relative'>
			<MainTitle />
			<div className='w-1/2 h-60.6vh flex flex-col justify-between items-center'>
				<p className='text-tertiary leading-5 text-xl tracking-wider mt-2.5'>
					Откройте для себя официальный
					<br /> онлайн-бутик Balenciaga.
					<br />
					<br /> Ознакомьтесь с последними коллекциями
					<br /> кроссовок, сумок и одежды для женщин и<br /> мужчин.
				</p>
				<div className='flex flex-col items-center'>
					<Timer />
					<a href='#about'>
						<img src={arrow} alt='arrow-img' />
					</a>
					<a
						href='tel:+16468891895'
						className='text-tertiary font-sans text-3xl'
					>
						+1 646 889 1895
					</a>
				</div>
			</div>
			<div className='w-1/2 absolute bottom-0'>
				<button className='text-tertiary bg-primary bg-opacity-25 hover:bg-opacity-50 hover:text-secondary transition-all py-5 font-sans text-3xl w-1/3'>
					Войти
				</button>
				<button className='text-tertiary bg-secondary bg-opacity-25 hover:bg-opacity-50 hover:text-secondary transition-all py-5 font-sans text-3xl w-2/3'>
					Регистрация
				</button>
			</div>

			<Carousel
				autoPlay={false}
				infiniteLoop={true}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				showArrows={false}
				swipeable
				emulateTouch
				className='absolute right-0 bottom-0'
			>
				<img className='object-contain h-87.7vh' src={firstScreenImg1} />
				<img className='object-contain h-87.7vh' src={firstScreenImg2} />
			</Carousel>

			{/* <img
				src={activeImg}
				onClick={switchImg}
				className='h-87.7vh absolute top-12.2vh right-0 bottom-0'
			/> */}
		</div>
	)
}

export default FirstScreen
