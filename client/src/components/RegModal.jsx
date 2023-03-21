import React, { useContext, useEffect, useState } from 'react'
import { Context } from '..'
import Modal from './UI/Modal'

const RegModal = ({ visible, setVisible }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {store} = useContext(Context)

	useEffect(() => {
		if (store.isAuth) {
			setVisible(false)
		}
	}, [store.isAuth])

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<h2 className='text-primary font-OpenSans font-semibold text-6xl leading-100% mb-[5.4vh]'>
				Регистрация
			</h2>
			<input
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Ваше имя...'
				className='border-b border-primary bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 pl-5 py-2.5 mb-[5.4vh]'
			/>
			<input
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Ваш электронный адрес...'
				className='border-b border-primary bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 pl-5 py-2.5 mb-[5.4vh]'
			/>
			<input
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder='Ваш пароль...'
				type='password'
				className='border-b border-primary bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 pl-5 py-2.5 mb-[5.4vh]'
			/>
			<button 
				onClick={() => store.registration(email, password, name)}
				className='bg-primary text-quaternary text-xl leading-100% py-2.5 px-6'
			>
				Зарегистрироваться
			</button>
		</Modal>
	)
}

export default RegModal
