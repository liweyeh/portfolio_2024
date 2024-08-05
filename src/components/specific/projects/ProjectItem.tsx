'use client';
import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '@hooks';
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
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0.01 });
	return (
		<div
			ref={elementRef}
			className={`h-screen w-screen flex justify-center ${!isInView && 'opacity-0'}`}
		>
			<div
				className={`h-5/6 w-5/6 text-txt_primary border-txt_primary border-2 rounded-xl p-10 grid grid-cols-[37.5%_62.5%] hover:shadow-3xl hover:shadow-highlight transition ease-in-out duration-500`}
			>
				<div className="h-full flex flex-col">
					<Text variant={TextVariants.subtitle} style={`!text-txt_secondary mb-2`}>
						{type}
					</Text>
					<Text variant={TextVariants.h2} style={`!text-highlight mb-5`}>
						{name}
					</Text>
					<div className="grow">{description}</div>
					<ProjectButton link={link} />
				</div>
				<div>{drawing}</div>
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
