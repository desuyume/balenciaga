import React, { useContext } from 'react';
import Modal from './UI/Modal'
import blankImg from '../assets/blank-avatar.webp'
import { Context } from '..'
import { toast } from 'react-hot-toast'

const ProfileModal = ({ visible, setVisible }) => {
	const { userStore } = useContext(Context)

	const clickLogout = () => {
		userStore.logout()
		setVisible(false)
		toast.error('Вы вышли из аккаунта')
	}

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<h2 className='text-primary font-OpenSans font-semibold text-[40px] leading-100%'>Профиль</h2>
			<div className='flex w-full pl-[30px] mt-[15px] pb-[110px]'>
				<div className='flex flex-col mr-[30px]'>
					<img className='w-[16.66vw]' src={userStore.user.img ? process.env.REACT_APP_API_URL + userStore.user.img : blankImg} />
					<button className='text-primary leading-100% mt-2.5'>Сменить аватар</button>
				</div>
				<div className='pt-[15px]'>
					<div className='flex text-primary text-xl leading-100% mb-[30px]'>
						<p className='mr-2'>Имя:</p>
						<p>{userStore.user.name}</p>
					</div>
					<div className='flex text-primary text-xl leading-100%'>
						<p className='mr-2'>Электронная почта:</p>
						<p>{userStore.user.email}</p>
					</div>
				</div>
			</div>
			<button onClick={clickLogout} className='bg-primary text-quaternary text-xl leading-100% px-16 py-2.5 absolute right-5 bottom-5'>Выйти</button>
		</Modal>
	);
};

export default ProfileModal;