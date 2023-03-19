import React from 'react'

const OrderButton = ({ title }) => {
	return (
		<button className='absolute bottom-14 left-[calc(50%-114px)] bg-primary text-secondary text-50px leading-100% font-Alumni h-9 flex items-center pr-10 pl-12 mt-12 before:w-351px before:bg-primary before:h-11px before:absolute before:top-14px before:left-[calc(-56px)] after:w-234px after:bg-secondary after:h-3px after:absolute after:top-11px after:left-0'>
			<p className='z-10'>{title}</p>
			
		</button>
	)
}

export default OrderButton
