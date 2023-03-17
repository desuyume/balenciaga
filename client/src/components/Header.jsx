import React from 'react'
import logo from '../assets/logo.svg'
import HeaderMenu from './UI/HeaderMenu'

const Header = () => {
	return (
		<div className='flex justify-center items-center bg-quaternary relative pr-24'>
			<HeaderMenu
				links={[
					{ title: 'ГЛАВНАЯ', to: '#' },
					{ title: 'О ПРОДУКТЕ', to: '#' },
					{ title: 'КОЛЛЕКЦИЯ', to: '#' },
				]}
			/>
			<a className='mx-24 my-0.5 z-10 hover:scale-110 transition-all' href='/'>
				<img src={logo} alt='logo-img' />
			</a>
			<HeaderMenu
				links={[
					{ title: 'ОТЗЫВЫ', to: '#' },
					{ title: 'ОБРАТНАЯ СВЯЗЬ', to: '#' },
				]}
			/>
		</div>
	)
}

export default Header
