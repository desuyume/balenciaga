import React, { useEffect } from 'react'

const Notification = ({ visible, setVisible, text }) => {
	useEffect(() => {
		if (visible) {
			setTimeout(() => {
				setVisible(false)
			}, 3000)
		}
	}, [visible])

	return (
		<div
			className={
				'fixed top-5 right-5 bg-primary z-50 transition-all ' +
				(visible ? 'visible opacity-100' : 'hidden opacity-0')
			}
		>
			<p className='text-secondary px-10 py-5 font-OpenSans'>{text}</p>
		</div>
	)
}

export default Notification
