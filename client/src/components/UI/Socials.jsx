import React from 'react';
import youtubeLogo from '../../assets/youtube-logo.svg';
import telegramLogo from '../../assets/telegram-logo.svg';
import pinterestLogo from '../../assets/pinterest-logo.svg';

const Socials = () => {
	return (
		<div className='flex h-[30px] mb-2.5'>
			<a className='w-[30px] mr-4' href='#'><img src={youtubeLogo} /></a>
			<a className='w-[30px] mr-4' href='#'><img src={telegramLogo} /></a>
			<a className='w-[30px]' href='#'><img src={pinterestLogo} /></a>
		</div>
	);
};

export default Socials;