import React from 'react'

const HeaderMenu = ({ links }) => {
	return (
		<nav>
			{links.map(link => (
				<a
					className='text-primary text-xl mr-7.5 last:mr-0 hover:text-secondary transition-colors'
					key={link.title}
					href={link.to}
				>
					{link.title}
				</a>
			))}
		</nav>
	)
}

export default HeaderMenu
