import React from 'react';
import { Text, TextVariants } from '@components';

export const TechStack = ({ stackContent }: { stackContent: string }) => {
	return (
		<div className="flex flex-col border-txt_primary border-2 rounded-xl p-5 lg:gap-2 lg:mt-2">
			<Text variant={TextVariants.p1} style={'!text-highlight'}>
				Tech Stack
			</Text>
			<Text variant={TextVariants.p2}>{stackContent}</Text>
		</div>
	);
};
