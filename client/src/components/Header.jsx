import React from 'react'
import logo from '../assets/logo.svg'
import HeaderMenu from './UI/HeaderMenu'

const Header = () => {
	return (
		<div className='flex justify-center items-center bg-quaternary relative pr-76px'>
			<HeaderMenu
				links={[
					{ title: 'ГЛАВНАЯ', to: '/' },
					{ title: 'О ПРОДУКТЕ', to: '#about' },
					{ title: 'КОЛЛЕКЦИЯ', to: '#collection' },
				]}
			/>
			<a className='mx-12 my-0.5 z-10 hover:scale-110 transition-all' href='/'>
				<img src={logo} alt='logo-img' />
			</a>
			<HeaderMenu
				links={[
					{ title: 'ОТЗЫВЫ', to: '#reviews' },
					{ title: 'ЗАКАЗАТЬ', to: '#feedback' },
				]}
			/>
			<div className='h-9.5 w-175px border border-primary shadow-[inset_0_0_6px_2px_rgba(21,9,10,0.2)] flex justify-center items-center absolute right-10'>
				<a className='text-primary text-xl py-2 px-2 leading-100% font-OpenSans font-bold' href='tel:+16468891895'>+1 646 889 1895</a>
			</div>
		</div>
	)
}

export default Header
