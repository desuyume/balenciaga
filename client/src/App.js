import About from './components/About';
import Feedback from './components/Feedback'
import FirstScreen from './components/FirstScreen';
import Footer from './components/Footer'
import Header from './components/Header'
import Offer from './components/Offer'
import Review from './components/Review'

function App() {
	return (
		<div>
			<Header />
			<FirstScreen />
			<About />
			<Offer />
			<Review />
			<Feedback />
			<Footer />
		</div>
	);
}

export default App;
