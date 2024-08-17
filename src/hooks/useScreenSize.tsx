import { useState, useEffect } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

export const useScreenSize = () => {
	const fullConfig = resolveConfig(tailwindConfig);
	const mobileScreenSize = Number(fullConfig.theme.screens.lg.replace('px', ''));
	const [isMobile, setIsMobile] = useState<boolean>();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= mobileScreenSize);
		};

		setIsMobile(window.innerWidth <= mobileScreenSize);
		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [mobileScreenSize]);

	return { isMobile };
};
