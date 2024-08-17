'use client';
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@hooks';
import { Text, TextVariants } from '@components';

export const MobileMsg = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0 });

	return (
		<div
			ref={elementRef}
			className={`h-screen flex justify-center items-center overflow-hidden mb-48 ${!isInView && 'opacity-0'}`}
		>
			<div
				className={`h-[80vh] w-[85vw] max-w-[420px] flex items-center justify-center border-solid border-2 border-txt_primary rounded-2xl ${isInView && 'animate-slide_right'}`}
			>
				<div
					className={`h-[97.5%] w-[95%] border-solid border-2 border-txt_primary rounded-lg flex items-center justify-center`}
				>
					<div>
						<Text
							variant={TextVariants.h1}
							style={`text-center leading-relaxed ${isInView && 'animate-focus_in_fwd'}`}
						>{`Welcome to Liwei\'s portfolio`}</Text>
					</div>
				</div>
			</div>
		</div>
	);
};
