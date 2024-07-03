'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import authorImg from '../../../../public/personal_photo.png';
import { useIntersectionObserver } from '@hooks';

export const About = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0.01 });

	return (
		<div className={`h-screen flex justify-center items-center`}>
			<div className={`h-1/2 w-5/6 flex justify-center items-center gap-20`}>
				<div
					className={`h-80 w-80 overflow-hidden rounded-full ${isInView ? 'animate-slide_right' : 'opacity-0'}`}
				>
					<Image width={320} height={320} src={authorImg} alt="Picture of the author" />
				</div>
				<div className="h-full w-4/6 flex flex-col justify-center">
					<p
						className={`text-txt_secondary text-3xl mb-5  ${isInView ? 'animate-slide_right' : 'opacity-0'}`}
					>{`Liwei Yeh`}</p>
					<p ref={elementRef} className={`text-highlight text-5xl mb-5`}>{`Fullstack Developer`}</p>
					<p
						ref={elementRef}
						className={`text-txt_primary text-3xl leading-10  ${isInView ? 'animate-slide_left' : 'opacity-0'}`}
					>{`I'm a fullstack developer originally from Taiwan and currently based in Sydney. I am passionate about building great interactive experience for the users. In addition, I have great interest in creative programming, UI/UX (HCI) research, and VR/AR application development`}</p>
				</div>
			</div>
		</div>
	);
};
