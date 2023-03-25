import React from 'react';

const LinkListItem = ({title, to}) => {
	return (
		<a href={to} className='text-primary text-xl leading-100% border-2 border-primary border-b-0 last:border-b-2 bg-quaternary w-[155px] py-2.5 text-center hover:text-quaternary hover:bg-primary transition-all'>{title}</a>
	);
};

export default LinkListItem;