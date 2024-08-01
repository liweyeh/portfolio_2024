'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import authorImg from '../../../../public/personal_photo.png';
import { useIntersectionObserver } from '@hooks';
import { Text, TextVariants } from '@components';

export const About = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0.5 });

	return (
		<div className={`h-screen flex justify-center items-center`}>
			<div className={`h-1/2 w-5/6 flex justify-center items-center gap-20`}>
				<div
					className={`h-80 w-80 overflow-hidden rounded-full ${isInView ? 'animate-slide_right' : 'opacity-0'}`}
				>
					<Image width={320} height={320} src={authorImg} alt="Picture of the author" />
				</div>
				<div className="h-full w-4/6 flex flex-col justify-center">
					<Text
						variant={TextVariants.subtitle}
						style={`mb-5  ${isInView ? 'animate-slide_right' : 'opacity-0'}`}
					>{`Liwei Yeh`}</Text>
					<Text
						variant={TextVariants.h2}
						style={`!text-highlight mb-5`}
					>{`Fullstack Developer`}</Text>
					<span ref={elementRef}>
						<Text
							variant={TextVariants.h3}
							style={`leading-10  ${isInView ? 'animate-slide_left' : 'opacity-0'}`}
						>{`Based in Sydney, a result-oriented Taiwanese Full-Stack Developer with over four years of comprehensive experience in designing and developing web applications,  API endpoints, and databases. Passionate about creative programming and UI development; Striving for further improving UI-related skills, such as UX research and UI visual design.`}</Text>
					</span>
				</div>
			</div>
		</div>
	);
};
