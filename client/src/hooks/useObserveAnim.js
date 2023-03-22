import { useEffect, useState } from 'react'
import useObserver from './useObserver'

export default function useObserveAnim(ref, animClass) {
	const [hasClass, setHasClass] = useState(false)
	const isIntersecting = useObserver(ref, hasClass)

	useEffect(() => {
		if (isIntersecting && !hasClass) {
			setHasClass(true);
			ref.current.classList.add(animClass)
		}
	}, [isIntersecting, hasClass])
}