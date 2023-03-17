import React from 'react';

const Contacts = () => {
	return (
		<div className='flex flex-col text-right'>
			<p className='text-primary text-lg text-opacity-70'>US, NY, 65 Bleecker St 3rd floor</p>
			<a className='text-primary text-lg text-opacity-70' href='mailto:balenciagahelp@gmail.com'>balenciagahelp@gmail.com</a>
			<a className='text-primary text-lg text-opacity-70' href='tel:+16468891895:'>+1 646 889 1895</a>
		</div>
	);
};

export default Contacts;