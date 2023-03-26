import { useContext, useEffect, useState } from 'react'
import { Context } from '.'
import About from './components/About'
import Advantages from './components/Advantages'
import Feedback from './components/Feedback'
import FirstScreen from './components/FirstScreen'
import Footer from './components/Footer'
import Header from './components/Header'
import Offer from './components/Offer'
import Review from './components/Reviews'
import { observer } from 'mobx-react-lite'
import { Toaster } from 'react-hot-toast'
import Loader from './components/UI/Loader/Loader'

function App() {
	const { userStore, commentStore } = useContext(Context)

	useEffect(() => {
		if (localStorage.getItem('token')) {
			userStore.checkAuth()
		}
		commentStore.getRandomCount(5)
		commentStore.getAll()
	}, [])

	if (userStore.isLoading) {
		return (
			<div className='w-screen h-screen flex justify-center items-center'>
				<Loader />
			</div>
		)
	}

	return (
		<div className='relative'>
			<Header />
			<FirstScreen />
			<About />
			<Offer />
			<Advantages />
			<Review />
			<Feedback />
			<Footer />
			<Toaster
				toastOptions={{
					className: 'bg-primary text-secondary text-center',
				}}
			/>
		</div>
	)
}

export default observer(App)
