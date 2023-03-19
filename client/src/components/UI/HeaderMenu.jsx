import React from 'react'

const HeaderMenu = ({ links }) => {
	return (
		<nav>
			{links.map(link => (
				<a
					className='text-primary text-xl mr-7.5 last:mr-0'
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
