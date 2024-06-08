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
		<div ref={elementRef} className="h-screen flex justify-center items-center overflow-hidden">
			<div className={`h-[90vh] w-[90vw] flex flex-col items-center justify-center`}>
				<div className={`h-[85%] w-[100%] flex flex-col`}>
					<div
						className={`h-[90%] border-solid border-x-2 border-t-2 border-txt_primary rounded-t-2xl flex items-center justify-center ${isInView && 'animate-slide_right'}`}
					>
						<div>
							<p
								className={`text-txt_primary text-7xl overflow-hidden border-r-2 whitespace-nowrap mx-auto ${isInView && 'animate-typing'}`}
							>{`Welcome to Liwei\'s portfolio`}</p>
						</div>
					</div>
					<div
						className={`h-[10%] border-2 border-txt_primary rounded-b-2xl flex justify-center items-center ${isInView && 'animate-slide_left'}`}
					>
						<div
							className={`h-10 w-10 border-2 border-txt_primary rounded-full  ${isInView && 'animate-fade_in'}`}
						/>
					</div>
				</div>
				<div
					className={`h-[4%] w-[10%] border-solid border-x-2 border-txt_primary ${isInView && 'animate-slide_right'}`}
				/>
				<div
					className={`h-[2%] w-[40%] border-solid border-2 border-txt_primary rounded-md flex justify-center ${isInView && 'animate-slide_left'}`}
				/>
			</div>
		</div>
	);
};
