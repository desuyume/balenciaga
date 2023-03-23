import React from 'react'

const FormInput = props => {
	return (
		<div className='relative'>
			<input
				{...props}
				className={
					'border-b bg-transparent outline-none w-[400px] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 px-5 py-2 mb-7 transition-colors ' +
					(props.isvalid ? 'border-green-600' : 'border-primary')
				}
			/>
		</div>
	)
}

export default FormInput
