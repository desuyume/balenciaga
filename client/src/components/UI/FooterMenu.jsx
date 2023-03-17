import React from 'react'

const FooterMenu = ({ links }) => {
	return (
		<nav className='flex flex-col pl-24 '>
			{links.map(link => (
				<a 
					key={link.title} 
					href={link.to}
					className='text-primary text-xl mb-1 last:mb-0 w-fit'
				>
					{link.title}
				</a>
			))}
		</nav>
	)
}

export default FooterMenu
