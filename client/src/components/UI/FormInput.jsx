import React from 'react';

const FormInput = (props) => {
	return (
		<input {...props} className='border-b border-primary bg-transparent outline-none w-[400px] text-xl leading-100% text-primary placeholder:text-primary placeholder:text-opacity-70 pl-5 py-2 mb-7' />
	);
};

export default FormInput;