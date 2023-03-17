/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Alumni Sans', ...defaultTheme.fontFamily.sans],
			serif: ['Inika', ...defaultTheme.fontFamily.serif],
		},
		extend: {
			colors: {
				primary: '#15090A',
				secondary: '#FBE9EA',
				tertiary: '#CEB6B8',
				quaternary: '#DDCBCB',
			},
			width: {
				'67vw': '67vw',
				'49vw': '49vw',
				'46.5vw': '46.5vw',
				'250px': '250px',
				'66.6vw': '66.6vw',
				'33.3vw': '33.3vw',
				'650px': '650px',
				'400px': '400px',
				'30px': '30px',
			},
			height: {
				'87.7vh': '87.7vh',
				'87.7%': '87.7%',
				'60.6vh': '60.6vh',
				'10.5vh': '10.5vh',
				'40px': '40px',
				'30.6vh': '30.6vh',
				'29.1vw': '29.1vw',
				'600px': '600px',
				'100px': '100px',
				'30px': '30px',
			},
			spacing: {
				'13.7vh': '13.7vh',
				'12.2vh': '12.2vh',
				'23vh': '23vh',
				'15': '3.75rem',
				'12.66vw': '12.66vw',
			},
			letterSpacing: {
				wider: '.1em',
				widest: '.2em',
			},
			backgroundImage: {
				firstScreenImg1:
					"linear-gradient(rgba(21, 9, 10, 0.9), rgba(21, 9, 10, 0.9)), url('/src/assets/firstscreen-img1.jpg')",
				firstScreenImg2:
					"linear-gradient(rgba(21, 9, 10, 0.9), rgba(21, 9, 10, 0.9)), url('/src/assets/firstscreen-img2.jpg')",
				reviewBg:
					"linear-gradient(rgba(21, 9, 10, 0.8), rgba(21, 9, 10, 0.8)), url('/src/assets/review-img.jpg')",
				offerBg: "url('/src/assets/offer-bg.png')"
			},
			backgroundPosition: {
				'top-4': 'center top -1rem',
			},
		},
	},
	plugins: [],
}
