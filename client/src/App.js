import About from './components/About';
import Advantages from './components/Advantages'
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
			<Advantages />
			<Review />
			<Feedback />
			<Footer />
		</div>
	);
}

export default App;
