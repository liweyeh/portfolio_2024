import { Text, TextVariants } from '@components';

export const Section = (props: {
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
					className={`h-full w-fit grid gap-x-8 gap-y-6 ${props.contentStyle}  ${props.isInView && 'animate-fade_in'}`}
				>
					{props.children}
				</div>
			</div>
		</div>
	);
};
