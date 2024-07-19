'use client';
import React, { useRef } from 'react';
import { Text, TextVariants } from '@components';
import { LuLanguages } from 'react-icons/lu';
import { TbLanguageHiragana } from 'react-icons/tb';
import { RiEnglishInput } from 'react-icons/ri';
import {
	SiReact,
	SiNextdotjs,
	SiExpress,
	SiMysql,
	SiTailwindcss,
	SiAzuredevops,
	SiAzurefunctions,
	SiMicrosoftazure,
} from 'react-icons/si';
import { BsFiletypeScss } from 'react-icons/bs';
import { VscVscode } from 'react-icons/vsc';
import { useIntersectionObserver } from '@hooks';

export const Skills = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0.01 });

	return (
		<div ref={elementRef} className={`h-screen flex justify-center items-center`}>
			<div className="h-5/6 w-5/6 grid grid-cols-5 grid-rows-2 gap-10">
				<Section
					title={'Tech Stacks'}
					styles={`col-start-1 row-span-2 col-span-2 ${isInView && 'animate-slide_right'}`}
					contentStyle={`flex flex-1 flex-wrap`}
					isInView={isInView}
				>
					<SectionItem
						title={'React.js'}
						desc={'5 years of experience'}
						icon={<SiReact size={'sm'} />}
					/>
					<SectionItem
						title={'SCSS'}
						desc={'4 years of experience'}
						icon={<BsFiletypeScss size={'sm'} />}
					/>
					<SectionItem
						title={'Next.js'}
						desc={'3 years of experience'}
						icon={<SiNextdotjs size={'sm'} />}
					/>
					<SectionItem
						title={'Express.js'}
						desc={'3 years of experience'}
						icon={<SiExpress size={'sm'} />}
					/>
					<SectionItem
						title={'SQL'}
						desc={'3 years of experience'}
						icon={<SiMysql size={'sm'} />}
					/>
					<SectionItem
						title={'Tailwind'}
						desc={'1 years of experience'}
						icon={<SiTailwindcss size={'sm'} />}
					/>
				</Section>
				<Section
					title="Tools"
					styles={`col-start-3 row-span-1 col-span-3 ${isInView && 'animate-slide_left'}`}
					contentStyle={'grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-6'}
					isInView={isInView}
				>
					<SectionItem
						title={'VSCode'}
						desc={'5 years of experience'}
						icon={<VscVscode size={'sm'} />}
					/>
					<SectionItem
						title={'Azure Devops'}
						desc={'4 years of experience'}
						icon={<SiAzuredevops size={'sm'} />}
					/>
					<SectionItem
						title={'Azure Functions'}
						desc={'1 years of experience'}
						icon={<SiAzurefunctions size={'sm'} />}
					/>
					<SectionItem
						title={'Data Factory'}
						desc={'1 years of experience'}
						icon={<SiMicrosoftazure size={'sm'} />}
					/>
				</Section>
				<Section
					title="Languages"
					styles={`col-start-3 row-span-1 col-span-3 ${isInView && 'animate-slide_left'}`}
					contentStyle={'grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-6'}
					isInView={isInView}
				>
					<SectionItem title={'Mandarin'} desc={'Native'} icon={<LuLanguages size={'sm'} />} />
					<SectionItem
						title={'English'}
						desc={'Fluent, IELTS: 8.5'}
						icon={<RiEnglishInput size={'sm'} />}
					/>
					<SectionItem
						title={'Japanese'}
						desc={'intermediate, JLPT N1'}
						icon={<TbLanguageHiragana size={'sm'} />}
					/>
				</Section>
			</div>
		</div>
	);
};

const Section = (props: {
	title: string;
	styles: string;
	contentStyle: string;
	children: React.ReactElement[];
	isInView: boolean;
}) => {
	return (
		<div
			className={`text-txt_primary border-txt_primary border-2 rounded-xl p-8 flex flex-col ${props.styles}`}
		>
			<Text style="pb-8 !text-highlight" variant={TextVariants.h2}>
				{props.title}
			</Text>
			<div className={`flex flex-1 items-center justify-center`}>
				<div
					className={`h-full w-full justify-center ${props.contentStyle}  ${props.isInView && 'animate-fade_in'}`}
				>
					{props.children}
				</div>
			</div>
		</div>
	);
};

const SectionItem = (props: { icon: React.ReactElement; title: string; desc: string }) => {
	return (
		<div className="flex gap-8 items-center w-fit">
			<div className="w-20">{props.icon}</div>
			<div>
				<Text variant={TextVariants.h3}>{props.title}</Text>
				<Text variant={TextVariants.p} style="text-txt_secondary">
					{props.desc}
				</Text>
			</div>
		</div>
	);
};
