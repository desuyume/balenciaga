import React from 'react'

const Title = ({ title }) => {
	return (
		<div className='flex justify-center'>
			<h2 className='text-primary bg-secondary inline-block text-5xl font-bold font-sans text-center tracking-wider px-60 my-2'>
				{title}
			</h2>
		</div>
	)
}

export default Title
