import React, { useRef, useState, useEffect } from 'react';

export const ProgressBar = ({ progress }: { progress: number }) => {
	return (
		<div className={`h-screen w-5 bg-black absolute top-0 right-0 flex justify-end`}>
			<div className={`w-1 bg-txt_primary`} style={{ height: `${progress}%` }} />
		</div>
	);
};

export const useProgress = () => {
	const [scrollProgress, setScrollProgress] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (!contentRef || !contentRef.current) return;
		const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
		const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
		setScrollProgress(scrollPercent);
	};

	useEffect(() => {
		if (contentRef && contentRef.current) {
			const content = contentRef.current;
			content.addEventListener('scroll', handleScroll);
			return () => {
				content.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);

	return { contentRef, scrollProgress };
};
