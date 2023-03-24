import React, { useContext, useState } from 'react'
import firstScreenImg1 from '../assets/firstscreen-img1.webp'
import firstScreenImg2 from '../assets/firstscreen-img2.webp'
import firstScreenImg3 from '../assets/firstscreen-img3.webp'
import firstScreenImg4 from '../assets/firstscreen-img4.webp'
import firstScreenImg5 from '../assets/firstscreen-img5.webp'
import Timer from './Timer'
import MainTitle from './UI/MainTitle'
import arrow from '../assets/arrow.png'
import AuthModal from './AuthModal'
import RegModal from './RegModal'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ProfileModal from './ProfileModal'

const FirstScreen = () => {
	const [isLoginVisible, setIsLoginVisible] = useState(false)
	const [isRegVisible, setIsRegVisible] = useState(false)
	const [isProfileVisible, setIsProfileVisible] = useState(false)
	const { userStore } = useContext(Context)
	const [bgImage, setBgImage] = useState(firstScreenImg1)

	const slides = [
		{ imageUrl: firstScreenImg1, caption: 'slide1' },
		{ imageUrl: firstScreenImg2, caption: 'slide2' },
		{ imageUrl: firstScreenImg3, caption: 'slide3' },
		{ imageUrl: firstScreenImg4, caption: 'slide4' },
		{ imageUrl: firstScreenImg5, caption: 'slide5' },
	]

	const handleBeforeChange = (oldIndex, newIndex) => {
		const slide = slides[newIndex]
		setBgImage(slide.imageUrl)
	}

	const settings = {
		autoplay: true,
		arrows: false,
		dots: false,
		infinite: true,
		speed: 700,
		beforeChange: handleBeforeChange,
	}

	return (
		<div
			style={{
				backgroundImage: `linear-gradient(rgba(21, 9, 10, 0.9), rgba(21, 9, 10, 0.9)),  url(${bgImage})`,
			}}
			className={
				'pt-[13.7vh] bg-no-repeat bg-top bg-cover bg-opacity-90 h-screen relative flex flex-col'
			}
		>
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
						<img src={arrow} alt='arrow-img' className='animate-bounce' />
					</a>
				</div>
				<div className='w-full'>
					{userStore.isAuth ? (
						<>
							<button onClick={() => setIsProfileVisible(true)} className='text-tertiary font-OpenSans font-semibold bg-primary bg-opacity-25 hover:bg-opacity-50 hover:text-secondary transition-all py-5 text-3xl w-2/3'>
								{userStore.user.name}
							</button>
							<button
								onClick={() => userStore.logout()}
								className='text-tertiary font-OpenSans font-semibold bg-secondary bg-opacity-25 hover:bg-opacity-50 hover:text-secondary transition-all py-5 text-3xl w-1/3'
							>
								Выйти
							</button>
						</>
					) : (
						<>
							<button
								className='text-tertiary font-OpenSans font-semibold bg-primary bg-opacity-25 hover:bg-opacity-50 hover:text-secondary transition-all py-5 text-3xl w-1/3'
								onClick={() => setIsLoginVisible(true)}
							>
								Войти
							</button>
							<button
								className='text-tertiary font-OpenSans font-semibold bg-secondary bg-opacity-25 hover:bg-opacity-50 hover:text-secondary transition-all py-5 text-3xl w-2/3'
								onClick={() => setIsRegVisible(true)}
							>
								Регистрация
							</button>
						</>
					)}
				</div>
				<AuthModal visible={isLoginVisible} setVisible={setIsLoginVisible} />
				<RegModal visible={isRegVisible} setVisible={setIsRegVisible} />
				<ProfileModal visible={isProfileVisible} setVisible={setIsProfileVisible} />
			</div>

			<Slider
				{...settings}
				className='h-[95vh] w-[calc(95vh*(2/3))] absolute left-[50%] bottom-0'
			>
				{slides.map((slide, index) => (
					<div key={index}>
						<img className='w-full' src={slide.imageUrl} alt={slide.caption} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default observer(FirstScreen)
