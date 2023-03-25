import React from 'react';
import crossImg from '../../assets/cross.svg'

const Modal = ({children, visible, setVisible}) => {
	return (
		<div className={'fixed top-0 left-0 bottom-0 right-0 bg-primary bg-opacity-50 flex justify-center items-center z-50 transition-all ' + (visible ? 'opacity-100 visible' : 'opacity-0 invisible')}>
			<div className='bg-secondary py-[15px] relative w-[66.6vw] flex flex-col justify-center items-center'>
				{children}
				<img onClick={() => setVisible(false)} src={crossImg} className='absolute right-1 top-1 cursor-pointer' />
			</div>
		</div>
	);
};

export default Modal;