'use client';
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@hooks';
import { Text, TextVariants } from '@components';
import { ProjectItem } from './ProjectItem';
import { WaterInsightDrawing } from './drawings/WaterInsightDrawing';
import { TechStack } from './TechStack';
import Link from 'next/link';

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
			<>
				<Text variant={TextVariants.p2}>
					WaterInsights provides easy access to information about New South Wales&apos; water
					resources and how the state government manages them
				</Text>
				<Text variant={TextVariants.p2}>
					My role in this project is full-stack developer. The responsibility includes interface
					development, API design & development, ETL operation, and databse schema design.
				</Text>
				<TechStack stackContent="React.js, SCSS, Express.js, SQL, Azure Functions, Azure Data Factory" />
			</>
		),
		link: 'https://waterinsights.waternsw.com.au/',
		drawing: <WaterInsightDrawing />,
	},
	{
		type: 'Web App + Mobile App',
		name: 'WaterIQ',
		description: (
			<>
				<Text variant={TextVariants.p2}>
					WaterIQ is a platform that allows Queensland&apos;s commercial water users to monitor
					their water usage data and fulfill their legal compliance requirements with the
					government.
				</Text>
				<Text variant={TextVariants.p2}>
					My role in this project is a front-end developer. My main responsibility is to develop a
					customer-facing portal that provides user data management, data visualization, and other
					water-related operations.
				</Text>
				<TechStack stackContent="React.js, SCSS, Express.js, SQL, Azure Functions, Azure Data Factory" />
				<Text variant={TextVariants.little}>
					*Note: You will not be allowed to log in without authorization. If you wish to have a
					sneak peek, please check out this{' '}
					<Link
						href={'https://www.youtube.com/watch?v=29ZNrew38G0'}
						target="_blank"
						className="text-highlight text-und underline underline-offset-2"
					>
						video
					</Link>
				</Text>
			</>
		),
		link: 'https://www.wateriq.water.qld.gov.au/',
		drawing: <>drawing</>,
	},
	{
		type: 'Web App (Prototype)',
		name: 'Dam360',
		description: (
			<>
				<Text variant={TextVariants.p2}>
					WaterInsights provides easy access to information about New South Wales&apos; water
					resources and how the state government manages them
				</Text>
				<Text variant={TextVariants.p2}>
					My role in this project is full-stack developer. The responsibility includes interface
					development, API design & development, ETL operation, and databse schema design.
				</Text>
				<TechStack stackContent="React.js, SCSS, Express.js, SQL, Azure Functions, Azure Data Factory" />
			</>
		),
		link: 'https://www.adasasystems.com/en/solution/dam-safety-management-software.html',
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
