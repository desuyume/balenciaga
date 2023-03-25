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
import Notification from './components/UI/Notification'

function App() {
	const { userStore, commentStore } = useContext(Context)
	const [notifVisible, setNotifVisible] = useState(false)
	const [notifText, setNotifText] = useState('')

	useEffect(() => {
		if (localStorage.getItem('token')) {
			userStore.checkAuth()
		}
		commentStore.getRandomCount(5) 
		commentStore.getAll()
	}, [])

	if (userStore.isLoading) {
		return <div>Загрузка...</div>
	}

	return (
		<div className='relative'>
			<Header />
			<FirstScreen setNotifVisible={setNotifVisible} setNotifText={setNotifText} />
			<About />
			<Offer setNotifVisible={setNotifVisible} setNotifText={setNotifText} />
			<Advantages />
			<Review />
			<Feedback setNotifVisible={setNotifVisible} setNotifText={setNotifText} />
			<Footer />
			<Notification visible={notifVisible} setVisible={setNotifVisible} text={notifText} />
		</div>
	)
}

export default observer(App)
