import React from 'react'
import Contacts from './UI/Contacts'
import Copyright from './UI/Copyright'
import FooterMenu from './UI/FooterMenu'
import OrderButton from './UI/OrderButton'
import Socials from './UI/Socials'
import triangleImg from '../assets/footerTriangle.svg'
import arrowImg from '../assets/footer-arrow.svg'

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className='bg-secondary py-4 relative flex justify-between pr-8 pl-24'>
			<FooterMenu
				links={[
					{ title: 'Главная', to: '/' },
					{ title: 'О продукте', to: '#about' },
					{ title: 'Коллекция', to: '#collection' },
					{ title: 'Отзывы', to: '#reviews' },
					{ title: 'Заказать', to: '#feedback' },
				]}
			/>
			<Copyright />
			<OrderButton title='ЗАКАЗАТЬ' />
			<div className='flex flex-col justify-end items-end'>
				<Socials />
				<Contacts />
			</div>
			<img
				src={triangleImg}
				className='absolute top-[-23px] left-[-30px] z-10'
			/>
			<img
				src={triangleImg}
				className='absolute top-[-23px] left-[calc(50%-30px)] z-10'
			/>
			<img
				src={triangleImg}
				className='absolute top-[-23px] right-[-30px] z-10'
			/>
			<img
				src={arrowImg}
				onClick={scrollToTop}
				className='absolute left-[calc(50%-54px)] top-[-60px] z-20 cursor-pointer hover:scale-105 transition-transform'
			/>
		</div>
	)
}

export default Footer
