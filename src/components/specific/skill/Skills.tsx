'use client';
import React, { useRef } from 'react';
import { Section } from './Section';
import { SectionItem } from './SectionItem';
import { LuLanguages } from 'react-icons/lu';
import { useIntersectionObserver } from '@hooks';
import { Text, TextVariants } from '@components';
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

export const Skills = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0.01 });

	return (
		<div
			className={`flex flex-col justify-center items-center mb-48 ${!isInView && 'opacity-0'} lg:h-screen `}
		>
			<Text variant={TextVariants.h1} style={`w-5/6 mb-10  ${isInView && 'animate-fade_in'}`}>
				{'Skills'}
			</Text>
			<div
				ref={elementRef}
				className="w-5/6 flex flex-col gap-10 xl:grid xl:grid-cols-5 xl:grid-rows-2 xl:h-5/6"
			>
				<Section
					title={'Tech Stacks'}
					styles={`col-start-1 row-span-2 col-span-2 ${isInView && 'animate-slide_right'}`}
					contentStyle={`grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:w-[75%] xl:grid-cols-1 xl:grid-rows-6 xl:w-fit`}
					isInView={isInView}
				>
					<SectionItem
						title={'React.js'}
						desc={'5 years experience'}
						icon={<SiReact className="w-full h-full" />}
					/>
					<SectionItem
						title={'SCSS'}
						desc={'4 years experience'}
						icon={<BsFiletypeScss className="w-full h-full" />}
					/>
					<SectionItem
						title={'Express.js'}
						desc={'4 years experience'}
						icon={<SiExpress className="w-full h-full" />}
					/>
					<SectionItem
						title={'SQL'}
						desc={'4 years experience'}
						icon={<SiMysql className="w-full h-full" />}
					/>
					<SectionItem
						title={'Next.js'}
						desc={'3 years experience'}
						icon={<SiNextdotjs className="w-full h-full" />}
					/>
					<SectionItem
						title={'Tailwind'}
						desc={'1 year experience'}
						icon={<SiTailwindcss className="w-full h-full" />}
					/>
				</Section>
				<Section
					title="Tools"
					styles={`col-start-3 row-span-1 col-span-3 ${isInView && 'animate-slide_left'}`}
					contentStyle={
						'grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:w-[75%] xl:w-full'
					}
					isInView={isInView}
				>
					<SectionItem
						title={'VSCode'}
						desc={'5 years experience'}
						icon={<VscVscode className="w-full h-full" />}
					/>
					<SectionItem
						title={'Azure Devops'}
						desc={'4 years experience'}
						icon={<SiAzuredevops className="w-full h-full" />}
					/>
					<SectionItem
						title={'Azure Functions'}
						desc={'1 year experience'}
						icon={<SiAzurefunctions className="w-full h-full" />}
					/>
					<SectionItem
						title={'Data Factory'}
						desc={'1 year experience'}
						icon={<SiMicrosoftazure className="w-full h-full" />}
					/>
				</Section>
				<Section
					title="Languages"
					styles={`col-start-3 row-span-1 col-span-3 ${isInView && 'animate-slide_left'}`}
					contentStyle={
						'grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:w-[75%] xl:w-full'
					}
					isInView={isInView}
				>
					<SectionItem
						title={'Mandarin'}
						desc={'Native'}
						icon={<LuLanguages className="w-full h-full" />}
					/>
					<SectionItem
						title={'English'}
						desc={'Fluent, IELTS: 8.5'}
						icon={<RiEnglishInput className="w-full h-full" />}
					/>
					<SectionItem
						title={'Japanese'}
						desc={'Intermediate, JLPT N1'}
						icon={<TbLanguageHiragana className="w-full h-full" />}
					/>
				</Section>
			</div>
		</div>
	);
};
