import React from 'react'

const FooterMenu = ({ links }) => {
	return (
		<nav className='flex flex-col'>
			{links.map(link => (
				<a 
					key={link.title} 
					href={link.to}
					className='text-primary text-xl leading-100% mb-1.25 last:mb-0 w-fit hover:text-tertiary transition-colors'
				>
					{link.title}
				</a>
			))}
		</nav>
	)
}

export default FooterMenu
