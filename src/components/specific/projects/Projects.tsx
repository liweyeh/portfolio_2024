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
			<Text variant={TextVariants.h1} style={`w-5/6 mb-10 ${isInView && 'animate-fade_in'}`}>
				{'Projects'}
			</Text>
			{items.map(item => (
				<ProjectItem
					key={item.name}
					type={item.type}
					name={item.name}
					description={item.description}
					link={item.link}
					drawing={item.drawing}
				/>
			))}
		</div>
	);
};

const items = [
	{
		type: 'Web App',
		name: 'Water Insights',
		description: (
			<div className="flex flex-col h-full">
				<Text variant={TextVariants.p1} style={'mb-4'}>
					WaterInsights provides easy access to information about New South Wales&apos; water
					resources and how the state government manages them
				</Text>
				<Text variant={TextVariants.p1}>
					My role in this project is full-stack developer. The responsibility includes interface
					development, API design & development, ETL operation, and Databse schema design.
				</Text>
				<div className="flex items-center grow">
					<div className="flex flex-col grow gap-2 border-txt_primary border-2 rounded-xl p-5">
						<Text variant={TextVariants.p1} style={'text-highlight'}>
							Tech Stack
						</Text>
						<Text variant={TextVariants.p1}>
							React.js, SCSS, Express.js, SQL, Azure Functions, Azure Data Factory
						</Text>
					</div>
				</div>
			</div>
		),
		link: 'https://waterinsights.waternsw.com.au/',
		drawing: <>drawing</>,
	},
	{
		type: 'Web App',
		name: 'WaterIQ',
		description: <Text variant={TextVariants.p1}>{'lorem ipsum'}</Text>,
		link: 'https://www.wateriq.water.qld.gov.au/',
		drawing: <>drawing</>,
	},
	{
		type: 'Design',
		name: 'Collection of Designs',
		description: <Text variant={TextVariants.p1}>{'lorem ipsum'}</Text>,
		link: 'https://www.figma.com/files/team/924550248414798543/project/21279109/Design?fuid=789297021430117064',
		drawing: <>drawing</>,
	},
	{
		type: 'Web App + PowerApp',
		name: 'Dam360',
		description: <Text variant={TextVariants.p1}>{'lorem ipsum'}</Text>,
		link: 'https://www.adasasystems.com/en/solution/dam-safety-management-software.html',
		drawing: <>drawing</>,
	},
	{
		type: 'Web App',
		name: 'This Portfolio',
		description: (
			<Text variant={TextVariants.p1}>
				{
					"If you are interested in seeing how I usually code, welcome to take a look at this portfolio's repo."
				}
			</Text>
		),
		link: 'https://github.com/liweyeh/portfolio_2024',
		drawing: <>drawing</>,
	},
];
