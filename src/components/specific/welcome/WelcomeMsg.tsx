'use client';
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@hooks';

// Todo: draw simple monitor in css
// Todo: add animation of monitor turning on
// Todo: add typing animation of welcome msg
// Todo: add scroll UI to indicate scrolling

export const WelcomeMsg = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef);

	return (
		<div ref={elementRef} className="h-screen flex justify-center items-center">
			<div
				className={`h-[90vh] w-[90vw] flex flex-col items-center justify-center ${isInView && 'animate-slide_right'}`}
			>
				<div className="h-[85%] w-[100%] border-solid border-2 border-txt_primary rounded-2xl flex flex-col">
					<div className="h-[90%]" />
					<div className="h-[10%] border-t-2 border-txt_primary flex justify-center items-center">
						<div className="h-10 w-10 border-2 border-txt_primary rounded-full" />
					</div>
				</div>
				<div className="h-[4%] w-[10%] border-solid border-x-2 border-txt_primary" />
				<div className="h-[2%] w-[40%] border-solid border-2 border-txt_primary rounded-md flex justify-center" />
			</div>
		</div>
	);
};
