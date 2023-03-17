import React from 'react'
import Contacts from './UI/Contacts'
import Copyright from './UI/Copyright'
import FooterMenu from './UI/FooterMenu'
import Socials from './UI/Socials'

const Footer = () => {
	return (
		<div className='bg-secondary py-4 relative flex justify-between pr-8'>
			<FooterMenu
				links={[
					{ title: 'Главная', to: '#' },
					{ title: 'О продукте', to: '#' },
					{ title: 'Коллекция', to: '#' },
					{ title: 'Отзывы', to: '#' },
					{ title: 'Обратная связь', to: '#' },
				]}
			/>
			<Copyright />
			<button className='bg-primary text-secondary text-5xl font-sans h-9 flex items-center pr-10 pl-12 mt-12'>ЗАКАЗАТЬ</button>
			<div className='flex flex-col justify-end items-end'>
				<Socials />
				<Contacts />
			</div>
		</div>
	)
}

export default Footer
