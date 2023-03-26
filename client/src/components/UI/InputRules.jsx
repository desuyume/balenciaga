import React, { useEffect, useRef, useState } from 'react';

const InputRules = ({rules, visible}) => {
	const rulesRef = useRef()
	const [height, setHeight] = useState(0)

	useEffect(() => {
		setHeight(rulesRef.current.clientHeight)
	}, [])

	return (
		<ul ref={rulesRef} style={{ top: -height - 5 }} className={'bg-primary bg-opacity-90 py-3 list-disc absolute right-0 max-w-[70%] px-5 transition-all ' + (visible ? 'visible opacity-100' : 'invisible opacity-0')}>
			{rules.map(rule =>
				<li key={rule} className='text-secondary leading-100% mb-2 last:mb-0 ml-5'>{rule}</li>
			)}
		</ul>
	);
};

export default InputRules;