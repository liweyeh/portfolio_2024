import React from 'react';
import { IconType } from 'react-icons';
import { SiReact, SiNextdotjs } from 'react-icons/si';

export const Skills = () => {
	return (
		<div className={`h-screen flex justify-center items-center`}>
			<div
				className="h-5/6 w-5/6 grid grid-cols-2 grid-rows-3 gap-10
            "
			>
				{/* <Section styles={'col-start-1 row-span-3'}>
					<SectionItem icon={<SiNextdotjs />} />
				</Section>
				<Section styles={'col-start-2 row-span-1'} />
				<Section styles={'col-start-2 row-span-1'} />
				<Section styles={'col-start-2 row-span-1'} /> */}
			</div>
		</div>
	);
};

const Section = (props: { styles: string; children: React.ReactElement }) => {
	return (
		<div
			className={`text-txt_primary border-txt_primary border-2 rounded-xl col-span-1 ${props.styles}`}
		>
			{props.children}
		</div>
	);
};

const SectionItem = (props: {
	icon: React.ReactElement;
	title: string;
	years: string;
	mastery: number;
}) => {
	return (
		<>
			<div>{props.icon}</div>
			<div>
				<div>{props.title}</div>
				<div>{`${props.years} years of experience`}</div>
				<div>{props.mastery}</div>
			</div>
		</>
	);
};
