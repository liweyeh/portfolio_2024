'use client';
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@hooks';
import { Text, TextVariants } from '@components';
import Link from 'next/link';

interface ProjectItemProps {
	type: string;
	name: string;
	description: React.ReactElement;
	link: string;
}

export const ProjectItem = ({ type, name, description, link }: ProjectItemProps) => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0.01 });
	return (
		<div
			ref={elementRef}
			className={`h-screen w-screen flex justify-center items-center ${!isInView && 'opacity-0'}`}
		>
			<div
				className={`h-5/6 w-5/6 text-txt_primary border-txt_primary border-2 rounded-xl p-10 grid grid-cols-[37.5%_62.5%] hover:shadow-3xl hover:shadow-highlight`}
			>
				<div className="h-full flex flex-col">
					<Text variant={TextVariants.subtitle} style={`!text-txt_secondary mb-2`}>
						{type}
					</Text>
					<Text variant={TextVariants.h2} style={`!text-highlight mb-5`}>
						{name}
					</Text>
					<span className="mb-5">{description}</span>
					<Link
						href={link}
						target="_blank"
						className={
							'bg-highlight w-full py-2 rounded-xl mt-auto flex items-center justify-center'
						}
					>
						<Text style={'inline-block'} variant={TextVariants.h3}>
							Visit
						</Text>
					</Link>
				</div>
				<div>drawing</div>
			</div>
		</div>
	);
};
