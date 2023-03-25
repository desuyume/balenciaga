import React from 'react'
import logo from '../assets/logo.svg'
import HeaderMenu from './UI/HeaderMenu'
import triangleImg from '../assets/headerTriangle.svg'
import LinkList from './UI/LinkList'

const Header = () => {
	return (
		<div className='flex justify-center items-center bg-quaternary relative pr-[187px]'>
			<HeaderMenu
				links={[
					{ title: 'ГЛАВНАЯ', to: '/' },
					{ title: 'О ПРОДУКТЕ', to: '#about' },
				]}
			/>
			<LinkList title='КОЛЛЕКЦИИ' links={[
				{ title: 'ЗИМНЯЯ', to: '#' },
				{ title: 'ВЕСЕННЯЯ', to: '#' },
				{ title: 'ЛЕТНЯЯ', to: '#' },
				{ title: 'ОСЕННЯЯ', to: '#' },
			]} />
			<a className='mx-12 my-0.5 hover:scale-110 transition-all z-20' href='/'>
				<img src={logo} alt='logo-img' />
			</a>
			<HeaderMenu
				links={[
					{ title: 'ОТЗЫВЫ', to: '#reviews' },
					{ title: 'ЗАКАЗАТЬ', to: '#feedback' },
				]}
			/>
			<div className='h-9.5 w-[175px] border border-primary shadow-[inset_0_0_6px_2px_rgba(21,9,10,0.2)] flex justify-center items-center absolute right-10 hover:bg-primary text-primary hover:text-quaternary  transition-all'>
				<a
					className='text-xl py-2 px-2 leading-100% font-OpenSans font-bold transition-all'
					href='tel:+16468891895'
				>
					+1 646 889 1895
				</a>
			</div>
			<img
				src={triangleImg}
				className='absolute top-[30px] left-[-30px] z-10'
			/>
			<img
				src={triangleImg}
				className='absolute top-[30px] left-[calc(50%-30px)] z-10'
			/>
			<img
				src={triangleImg}
				className='absolute top-[30px] right-[-30px] z-10'
			/>
		</div>
	)
}

export default Header
