import React, { useState } from 'react'
import firstScreenImg1 from '../assets/firstscreen-img1.jpg'
import firstScreenImg2 from '../assets/firstscreen-img2.jpg'
import Timer from './Timer'
import MainTitle from './UI/MainTitle'
import arrow from '../assets/arrow.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Modal from './UI/Modal'
import AuthModal from './AuthModal'
import RegModal from './RegModal'

const FirstScreen = () => {
	const [images, setImages] = useState([firstScreenImg1, firstScreenImg2])
	const [activeImgIndex, setActiveImgIndex] = useState(0)
	const [activeImg, setActiveImg] = useState(images[activeImgIndex])
	const [isLoginVisible, setIsLoginVisible] = useState(false)
	const [isRegVisible, setIsRegVisible] = useState(false)

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
		<div className='bg-firstScreenImg1 pt-[13.7vh] bg-no-repeat bg-top bg-cover bg-opacity-90 h-screen relative flex flex-col'>
			<MainTitle />
			<div className='w-1/2 h-full flex flex-col justify-between items-center'>
				<p className='text-tertiary font-OpenSans font-semibold leading-6 text-xl tracking-wide mt-2.5'>
					Откройте для себя официальный
					<br /> онлайн-бутик Balenciaga.
					<br />
					<br /> Ознакомьтесь с последними коллекциями
					<br /> кроссовок, сумок и одежды для женщин и<br /> мужчин.
				</p>
				<div className='flex justify-center items-center'>
					<Timer />
					<a className='ml-15' href='#about'>
						<img src={arrow} alt='arrow-img' />
					</a>
				</div>
				<div className='w-full'>
					<button className='text-tertiary font-OpenSans font-semibold bg-primary bg-opacity-25 hover:bg-opacity-50 hover:text-secondary transition-all py-5 text-3xl w-1/3' onClick={() => setIsLoginVisible(true)}>
						Войти
					</button>
					<button className='text-tertiary font-OpenSans font-semibold bg-secondary bg-opacity-25 hover:bg-opacity-50 hover:text-secondary transition-all py-5 text-3xl w-2/3' onClick={() => setIsRegVisible(true)}>
						Регистрация
					</button>
				</div>
				<AuthModal visible={isLoginVisible} setVisible={setIsLoginVisible} />
				<RegModal visible={isRegVisible} setVisible={setIsRegVisible} />
			</div>

			{/* <Carousel
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
				<img className='object-contain h-[87.7vh]' src={firstScreenImg1} />
				<img className='object-contain h-[87.7vh]' src={firstScreenImg2} />
			</Carousel> */}

			<img
				src={activeImg}
				onClick={switchImg}
				className='[h-87.7vh] absolute top-[12.2vh] right-0 bottom-0'
			/>
		</div>
	)
}

export default FirstScreen
