import React from 'react'

const Title = ({ title }) => {
	return (
		<div className='flex justify-center'>
			<h2 className='text-primary bg-secondary inline-block text-5xl font-Alumni font-bold tracking-wider px-[14.9vw] my-2'>
				{title}
			</h2>
		</div>
	)
}

export default Title
