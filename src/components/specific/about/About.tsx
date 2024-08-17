'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import authorImg from '../../../../public/personal_photo.png';
import { useIntersectionObserver, useScreenSize } from '@hooks';
import { Text, TextVariants } from '@components';

export const About = () => {
	const imgRef = useRef<HTMLDivElement | null>(null);
	const subRef = useRef<HTMLDivElement | null>(null);
	const txtRef = useRef<HTMLDivElement | null>(null);
	const { isInView: isImgInView } = useIntersectionObserver(imgRef, { threshold: 0.5 });
	const { isInView: isSubInView } = useIntersectionObserver(subRef, { threshold: 0.5 });
	const { isInView: isTxtInView } = useIntersectionObserver(txtRef, { threshold: 0.2 });
	const { isMobile } = useScreenSize();

	return (
		<div className={`flex justify-center items-center mb-48 lg:mb-0 lg:h-screen`}>
			<div
				className={`h-[90%] w-5/6 flex flex-col justify-center items-center gap-10 lg:gap-20 lg:flex-row lg:h-1/2`}
			>
				<div
					ref={imgRef}
					className={`h-72 min-h-72 w-72 min-w-72 overflow-hidden rounded-full ${isImgInView ? 'animate-slide_right' : 'opacity-0'} lg:h-80 lg:min-h-80 lg:w-80 lg:min-w-80 `}
				>
					<Image width={320} src={authorImg} alt="Picture of the author" />
				</div>
				<div className="w-5/6 flex flex-col justify-center lg:h-full lg:w-4/6">
					<Text
						ref={subRef}
						variant={TextVariants.subtitle}
						style={`mb-5  ${isSubInView && isMobile ? 'animate-slide_right' : 'opacity-0'}`}
					>{`Liwei Yeh`}</Text>
					<Text
						variant={TextVariants.h2}
						style={`!text-highlight mb-5 ${isSubInView ? 'animate-slide_right' : 'opacity-0'}`}
					>{`Fullstack Developer`}</Text>
					<Text
						ref={txtRef}
						variant={TextVariants.h3}
						style={`leading-10  ${isTxtInView ? 'animate-slide_left' : 'opacity-0'}`}
					>{`Based in Sydney, a result-oriented Taiwanese Full-Stack Developer with over four years of comprehensive experience in designing and developing web applications, API endpoints, and databases. Passionate about creative programming and UI development; Striving for further improving UI-related skills, such as UX research and UI visual design.`}</Text>
				</div>
			</div>
		</div>
	);
};
