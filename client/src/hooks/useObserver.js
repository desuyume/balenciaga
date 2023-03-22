import { useEffect, useState } from 'react'

export default function useObserver(ref) {
	const [isIntersecting, setIsIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting)
			},
			{
				rootMargin: '0px',
				threshold: 1.0,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		}
	}, [ref]);

	return isIntersecting;
}
