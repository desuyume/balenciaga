import React from 'react'
import Modal from './UI/Modal'

const RegModal = ({ visible, setVisible }) => {
	return (
		<Modal visible={visible} setVisible={setVisible}>
			<h2 className='text-primary font-OpenSans font-semibold text-6xl leading-100% mb-[5.4vh]'>
				Регистрация
			</h2>
			<input
				placeholder='Ваше имя...'
				className='border-b border-primary bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 pl-5 py-2.5 mb-[5.4vh]'
			/>
			<input
				placeholder='Ваш электронный адрес...'
				className='border-b border-primary bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 pl-5 py-2.5 mb-[5.4vh]'
			/>
			<input
				placeholder='Ваш пароль...'
				className='border-b border-primary bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 pl-5 py-2.5 mb-[5.4vh]'
			/>
			<input
				placeholder='Повторите пароль...'
				className='border-b border-primary bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 pl-5 py-2.5 mb-[7.5vh]'
			/>
			<button className='bg-primary text-quaternary text-xl leading-100% py-2.5 px-6'>
				Зарегистрироваться
			</button>
		</Modal>
	)
}

export default RegModal
