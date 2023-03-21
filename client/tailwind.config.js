/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			Alumni: ['Alumni Sans', ...defaultTheme.fontFamily.sans],
			Inter: ['Inter', ...defaultTheme.fontFamily.sans],
			OpenSans: ['Open Sans', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				primary: '#15090A',
				secondary: '#FBE9EA',
				tertiary: '#CEB6B8',
				quaternary: '#DDCBCB',
			},
			spacing: {
				7.5: '1.875rem',
				15: '3.75rem',
				1.25: '0.3125rem',
			},
			letterSpacing: {
				wide: '.05em',
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
				offerBg: "url('/src/assets/offer-bg.png')",
				advantagesBg: "url('/src/assets/advantages-bg.webp')",
			},
			backgroundPosition: {
				'top-4': 'center top -1rem',
			},
			lineHeight: {
				'100%': '100%',
			},
		},
	},
	plugins: [],
}
