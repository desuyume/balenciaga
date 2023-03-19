import React from 'react'
import Contacts from './UI/Contacts'
import Copyright from './UI/Copyright'
import FooterMenu from './UI/FooterMenu'
import Socials from './UI/Socials'

const Footer = () => {
	return (
		<div className='bg-secondary py-4 relative flex justify-between pr-8 pl-24'>
			<FooterMenu
				links={[
					{ title: 'Главная', to: '#' },
					{ title: 'О продукте', to: '#' },
					{ title: 'Коллекция', to: '#' },
					{ title: 'Отзывы', to: '#' },
					{ title: 'Заказать', to: '#' },
				]}
			/>
			<Copyright />
			<button className='absolute bottom-14 left-[calc(50%-114px)] bg-primary text-secondary text-5xl leading-100% font-Alumni h-9 flex items-center pr-10 pl-12 mt-12'>ЗАКАЗАТЬ</button>
			<div className='flex flex-col justify-end items-end'>
				<Socials />
				<Contacts />
			</div>
		</div>
	)
}

export default Footer
