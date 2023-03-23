import { useContext, useEffect } from 'react'
import { Context } from '.'
import About from './components/About'
import Advantages from './components/Advantages'
import Feedback from './components/Feedback'
import FirstScreen from './components/FirstScreen'
import Footer from './components/Footer'
import Header from './components/Header'
import Offer from './components/Offer'
import Review from './components/Review'
import { observer } from 'mobx-react-lite'

function App() {
	const { userStore } = useContext(Context)

	useEffect(() => {
		if (localStorage.getItem('token')) {
			userStore.checkAuth()
		}
	}, [])

	if (userStore.isLoading) {
		return <div>Загрузка...</div>
	}

	return (
		<div>
			<Header />
			<FirstScreen />
			<About />
			<Offer />
			<Advantages />
			<Review />
			<Feedback />
			<Footer />
		</div>
	)
}

export default observer(App)
