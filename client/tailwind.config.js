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
			width: {
				'67vw': '67vw',
				'49vw': '49vw',
				'46.5vw': '46.5vw',
				'250px': '250px',
				'66.6vw': '66.6vw',
				'33.3vw': '33.3vw',
				'650px': '650px',
				'400px': '400px',
				'175px': '10.9375rem',
				'30px': '30px',
				'234px': '234px',
				'351px': '351px',
			},
			height: {
				'123px': '123px',
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
				'9.5': '2.375rem',
				'72.25vh': '72.25vh',
				'3px': '3px',
			},
			spacing: {
				'13.7vh': '13.7vh',
				'12.2vh': '12.2vh',
				'23vh': '23vh',
				'7.5': '1.875rem',
				'15': '3.75rem',
				'12.66vw': '12.66vw',
				'14.9vw': '14.9vw',
				'76px': '4.75rem',
				'1.25': '0.3125rem',
				'11px': '11px',
				'14px': '14px',
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
				offerBg: "url('/src/assets/offer-bg.png')"
			},
			backgroundPosition: {
				'top-4': 'center top -1rem',
			},
			lineHeight: {
				'100%': '100%',
			},
			boxShadow: {
				'btn-shadow': 'box-shadow: inset 0px 0px 6px 2px rgba(21, 9, 10, 0.3);',
			},
			opacity: {
				'65': '.65',
			},
			zIndex: {
        '-1': '-1',
      },
			fontSize: {
				'50px': '50px',
			}
		},
	},
	plugins: [],
}
