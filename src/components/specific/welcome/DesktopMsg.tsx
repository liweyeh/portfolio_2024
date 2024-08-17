'use client';
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@hooks';
import { Text, TextVariants } from '@components';

export const DesktopMsg = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0 });

	return (
		<div
			ref={elementRef}
			className={`h-screen flex justify-center items-center overflow-hidden ${!isInView && 'opacity-0'}`}
		>
			<div className={`h-[90vh] w-[90vw] flex flex-col items-center justify-center`}>
				<div className={`h-[85%] w-[100%] flex flex-col`}>
					<div
						className={`h-[90%] border-solid border-x-2 border-t-2 border-txt_primary rounded-t-2xl flex items-center justify-center ${isInView && 'animate-slide_right'}`}
					>
						<div>
							<Text
								variant={TextVariants.h1}
								style={`overflow-hidden border-r-2 whitespace-nowrap mx-auto ${isInView && 'animate-typing'}`}
							>{`Welcome to Liwei\'s portfolio`}</Text>
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
