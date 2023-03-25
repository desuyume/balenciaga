import React, { useState } from 'react'
import LinkListItem from './LinkListItem'

const LinkList = ({title, links}) => {
	const [listVisible, setListVisible] = useState(false)

	const toggleList = (e) => {
		e.preventDefault()
		setListVisible(!listVisible)
	}

	return (
		<div className='flex flex-col items-center relative'>
			<a
				className='text-primary text-xl ml-7.5 hover:text-secondary transition-colors'
				href='#'
				onClick={toggleList}
			>
				{title}
			</a>
			<div className={'flex flex-col absolute top-[40px] left-[15px] z-50 transition-all ' + (listVisible ? 'opacity-100 visible' : 'opacity-0 invisible')}>
				{links.map(link =>
					<LinkListItem key={link.title} title={link.title} to={link.to} />	
				)}
			</div>
		</div>
	)
}

export default LinkList
