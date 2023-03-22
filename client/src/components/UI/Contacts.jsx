import React from 'react';

const Contacts = () => {
	return (
		<div className='flex flex-col text-right'>
			<p className='text-primary text-xl leading-100% mb-2 text-opacity-70'>US, NY, 65 Bleecker St 3rd floor</p>
			<a className='text-primary text-xl leading-100% mb-2 text-opacity-70 hover:text-tertiary transition-colors' href='mailto:balenciagahelp@gmail.com'>balenciagahelp@gmail.com</a>
			<a className='text-primary text-xl leading-100% text-opacity-70 hover:text-tertiary transition-colors' href='tel:+16468891895:'>+1 646 889 1895</a>
		</div>
	);
};

export default Contacts;