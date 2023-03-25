import React, { useContext, useState } from 'react'
import { Context } from '..'
import Modal from './UI/Modal'
import {
	ValidateEmail,
	ValidateName,
	ValidatePassword,
} from '../utils/Validation'
import useValidation from '../hooks/useValidation'
import { toast } from 'react-hot-toast'

const RegModal = ({ visible, setVisible, setNotifVisible, setNotifText }) => {
	const [name, setName] = useState('')
	const isValidName = useValidation(name, ValidateName)
	const [email, setEmail] = useState('')
	const isValidEmail = useValidation(email, ValidateEmail)
	const [password, setPassword] = useState('')
	const isValidPassword = useValidation(password, ValidatePassword)
	const [img, setImg] = useState('')
	const { userStore } = useContext(Context)

	const clickReg = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('email', email)
		formData.append('password', password)
		formData.append('img', img)
		userStore.registration(formData).then(() => {
			if (userStore.isAuth) {
				toast.success('Вы успешно зарегистрировались!')
				setVisible(false)
				setName('')
				setEmail('')
				setPassword('')
				setImg('')
			}
		}).catch(e => toast.error(e.message))
	}

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<h2 className='text-primary font-OpenSans font-semibold text-6xl leading-100% mb-[5.4vh]'>
				Регистрация
			</h2>
			<input
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Ваше имя...'
				className={
					'border-b bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 py-2.5 mb-[5.4vh] transition-colors ' +
					(isValidName ? 'border-green-600' : 'border-primary')
				}
			/>
			<input
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Ваш электронный адрес...'
				className={
					'border-b bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 py-2.5 mb-[5.4vh] transition-colors ' +
					(isValidEmail ? 'border-green-600' : 'border-primary')
				}
			/>
			<input
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder='Ваш пароль...'
				type='password'
				className={
					'border-b bg-transparent outline-none w-[50vw] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 py-2.5 mb-[5.4vh] transition-colors ' +
					(isValidPassword ? 'border-green-600' : 'border-primary')
				}
			/>
			<div className='flex ml-20'>
				<label className='text-primary pt-0.5 mr-3' htmlFor='avatar'>
					Выберите свой аватар:
				</label>
				<input
					onChange={e => setImg(e.target.files[0])}
					id='avatar'
					type='file'
					accept='.png, .jpg, .jpeg'
					className='mb-[5.4vh] text-primary w-fit'
				/>
			</div>
			<button
				onClick={clickReg}
				className='bg-primary text-quaternary text-xl leading-100% py-2.5 px-6'
			>
				Зарегистрироваться
			</button>
		</Modal>
	)
}

export default RegModal
