import React from 'react';
import { Text, TextVariants } from '@components';

export const SectionItem = (props: { icon: React.ReactElement; title: string; desc: string }) => {
	return (
		<div className="flex gap-4 items-center w-fit margin-x-auto">
			<div className="w-16">{props.icon}</div>
			<div>
				<Text variant={TextVariants.h3}>{props.title}</Text>
				<Text variant={TextVariants.p2} style="text-txt_secondary">
					{props.desc}
				</Text>
			</div>
		</div>
	);
};
