'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import authorImg from '../../../../public/personal_photo.png';
import { useIntersectionObserver } from '@hooks';
import { Text, TextVariants } from '@components';

export const About = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0.01 });

	return (
		<div className={`h-screen flex justify-center items-center ${!isInView && 'opacity-0'}`}>
			<div className={`h-1/2 w-5/6 flex justify-center items-center gap-20`}>
				<div
					className={`h-80 w-80 overflow-hidden rounded-full ${isInView && 'animate-slide_right'}`}
				>
					<Image width={320} height={320} src={authorImg} alt="Picture of the author" />
				</div>
				<div ref={elementRef} className="h-full w-4/6 flex flex-col justify-center">
					<Text
						variant={TextVariants.subtitle}
						style={`mb-5  ${isInView && 'animate-slide_right'}`}
					>{`Liwei Yeh`}</Text>
					<Text
						variant={TextVariants.h2}
						style={`!text-highlight mb-5`}
					>{`Fullstack Developer`}</Text>
					<Text
						variant={TextVariants.h3}
						style={`leading-10  ${isInView && 'animate-slide_left'}`}
					>{`I'm a fullstack developer originally from Taiwan and currently based in Sydney. I am passionate about building great interactive experience for the users. In addition, I am interested in creative programming, UI/UX research, and VR/AR application development`}</Text>
				</div>
			</div>
		</div>
	);
};
