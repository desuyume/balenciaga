import React, { useContext, useEffect, useState } from 'react'
import { Context } from '..'
import Modal from './UI/Modal'

const AuthModal = ({ visible, setVisible }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {userStore} = useContext(Context)

	const clickAuth = () => {
		userStore.login(email, password)
		setEmail('')
		setPassword('')
	}

	useEffect(() => {
		if (userStore.isAuth) {
			setVisible(false)
		}
	}, [userStore.isAuth])

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<h2 className='text-primary font-OpenSans font-semibold text-6xl leading-100% mb-[10.8vh]'>
				Вход
			</h2>
			<input
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Ваш электронный адрес...'
				className='border-b border-primary bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 py-2.5 mb-[5.4vh]'
			/>
			<input
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder='Ваш пароль...'
				type='password'
				className='border-b border-primary bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 py-2.5 mb-[10.8vh]'
			/>
			<button 
				onClick={clickAuth}
				className='bg-primary text-quaternary text-xl leading-100% py-2.5 px-24'
			>
				Войти
			</button>
		</Modal>
	)
}

export default AuthModal
