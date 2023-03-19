import React from 'react';
import logo from '../../assets/logo.svg';

const Copyright = () => {
	return (
		<div className='flex items-center absolute bottom-0 left-[calc(50%-165px)]'>
			<img src={logo} />
			<p className='text-xl text-primary text-opacity-70 ml-2'>© 2022-2023 Balenciaga</p>
		</div>
	);
};

export default Copyright;