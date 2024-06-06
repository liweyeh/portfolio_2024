import { useEffect, useState } from 'react';

export const useIntersectionObserver = (
	elRef: React.MutableRefObject<HTMLDivElement | null>,
): { isInView: boolean } => {
	const [isInView, setisInView] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setisInView(true);
					} else {
						setisInView(false);
					}
				});
			},
			{
				threshold: 0.1,
			},
		);

		let ref: HTMLDivElement;
		if (elRef.current) {
			ref = elRef.current;
			observer.observe(elRef.current);
		}

		return () => {
			if (ref) {
				observer.unobserve(ref);
			}
		};
	}, [elRef]);

	return { isInView };
};
