import React from 'react';
import { Text, TextVariants } from '@components';

export const TechStack = ({ stackContent }: { stackContent: string }) => {
	return (
		<div className="flex flex-col gap-2 border-txt_primary border-2 rounded-xl p-5 mt-2">
			<Text variant={TextVariants.p1} style={'!text-highlight'}>
				Tech Stack
			</Text>
			<Text variant={TextVariants.p1}>{stackContent}</Text>
		</div>
	);
};
