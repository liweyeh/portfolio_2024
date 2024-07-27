'use client';
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@hooks';
import { Text, TextVariants } from '@components';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const { isInView } = useIntersectionObserver(elementRef, { threshold: 0.01 });

	return (
		<div
			ref={elementRef}
			className={`flex flex-col justify-center items-center ${!isInView && 'opacity-0'}`}
		>
			<Text variant={TextVariants.h1} style={`w-5/6 mb-10  ${isInView && 'animate-fade_in'}`}>
				{'Projects'}
			</Text>
			<ProjectItem
				type={'Web App'}
				name="Water Insights"
				description={<Text variant={TextVariants.p1}>{'lorem ipsum'}</Text>}
				link={'https://waterinsights.waternsw.com.au/'}
			/>
			<ProjectItem
				type={'Web App'}
				name="WaterIQ"
				description={<Text variant={TextVariants.p1}>{'lorem ipsum'}</Text>}
				link={'https://www.wateriq.water.qld.gov.au/'}
			/>
			<ProjectItem
				type={'Design'}
				name="Collection of Designs"
				description={<Text variant={TextVariants.p1}>{'lorem ipsum'}</Text>}
				link={
					'https://www.figma.com/files/team/924550248414798543/project/21279109/Design?fuid=789297021430117064'
				}
			/>
			<ProjectItem
				type={'Web App + PowerApp'}
				name="Dam360"
				description={<Text variant={TextVariants.p1}>{'lorem ipsum'}</Text>}
				link={'https://www.adasasystems.com/en/solution/dam-safety-management-software.html'}
			/>
			<ProjectItem
				type={'Web App'}
				name="This Portfolio"
				description={<Text variant={TextVariants.p1}>{'lorem ipsum'}</Text>}
				link={'https://github.com/liweyeh/portfolio_2024'}
			/>
		</div>
	);
};
