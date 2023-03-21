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
					"linear-gradient(rgba(21, 9, 10, 0.9), rgba(21, 9, 10, 0.9)), url('/src/assets/firstscreen-img1.webp')",
				firstScreenImg2:
					"linear-gradient(rgba(21, 9, 10, 0.9), rgba(21, 9, 10, 0.9)), url('/src/assets/firstscreen-img2.webp')",
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
			animation: {
				'title-appear': 'titleAppear 1s ease-in 1',
				'flicker': 'flicker 0.5s ease-in-out infinite alternate'
			},
			keyframes: {
				titleAppear: {
					'0%': { marginRight: '100%' },
					'100%': { marginRight: '1.5rem' },
				},
				flicker: {
					'0%': {
						opacity: '0.6',
						textShadow: '2px 2px 5px #FBE9EA'
					},
					'100%': {
						opacity: '1',
						textShadow: '2px 2px 10px #FBE9EA'
					}
				}
			},
		},
	},
	plugins: [],
}
