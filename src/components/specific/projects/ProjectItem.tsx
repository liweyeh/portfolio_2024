'use client';
import React, { useRef, useState } from 'react';
import { useIntersectionObserver, useScreenSize } from '@hooks';
import { Text, TextVariants } from '@components';
import { IoMdArrowRoundUp } from 'react-icons/io';
import Link from 'next/link';

interface ProjectItemProps {
	type: string;
	name: string;
	description: React.ReactElement;
	link: string;
	drawing: React.ReactElement;
}

export const ProjectItem = ({ type, name, description, link, drawing }: ProjectItemProps) => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isMobile } = useScreenSize();
	const { isInView } = useIntersectionObserver(elementRef, { threshold: isMobile ? 0.4 : 0.25 });
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			ref={elementRef}
			className={`w-screen flex justify-center ${isInView ? 'opacity-100' : 'opacity-30'} transition ease-in-out duration-500 lg:h-screen`}
		>
			<div
				className={`h-5/6 w-5/6 text-txt_primary border-txt_primary border-2 rounded-xl p-10 px-5 flex flex-col lg:hover:shadow-3xl lg:hover:shadow-highlight transition ease-in-out duration-500 lg:p-10 lg:pr-0 lg:grid lg:grid-rows-1 lg:grid-cols-[50%_50%] xl:grid-cols-[37.5%_62.5%]`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="h-full flex flex-col gap-4 lg:gap-0">
					<Text variant={TextVariants.subtitle} style={`!text-txt_secondary lg:mb-2`}>
						{type}
					</Text>
					<Text variant={TextVariants.h2} style={`!text-highlight lg:mb-5`}>
						{name}
					</Text>
					<div className="grow flex flex-col h-full gap-4">{description}</div>
					<ProjectButton link={link} />
				</div>
				<div className="h-full order-first lg:order-last">
					{React.cloneElement(drawing, { isShown: isMobile ? isInView : isHovered })}
				</div>
			</div>
		</div>
	);
};

const ProjectButton = ({ link }: { link: string }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<Link
			href={link}
			target="_blank"
			className={
				'bg-highlight w-full py-2 rounded-xl mt-auto flex items-center justify-center relative overflow-hidden'
			}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Text style={'inline-block'} variant={TextVariants.h3}>
				Visit
			</Text>
			<div
				className={`absolute  top-full ${isHovered && 'translate-y-[-100%]'} left-0 w-full h-full flex items-center justify-center bg-highlight_light transition ease-in-out duration-300`}
			>
				<IoMdArrowRoundUp size={30} />
			</div>
		</Link>
	);
};
