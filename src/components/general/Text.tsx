import React, { forwardRef } from 'react';

export enum TextVariants {
	h1,
	h2,
	h3,
	subtitle,
	p1,
	p2,
	p3,
	little,
}
interface TextProps extends React.CSSProperties {
	children: React.ReactNode;
	variant?: TextVariants;
	style?: string;
}

const TEXT_VARIANTS: { [key in TextVariants]: string } = {
	[TextVariants.h1]: 'text-5xl lg:text-4xl',
	[TextVariants.h2]: 'text-3xl lg:text-xl',
	[TextVariants.h3]: 'text-xl lg:text-lg',
	[TextVariants.subtitle]: 'text-xl lg:text-lg !text-txt_secondary',
	[TextVariants.p1]: 'text-lg lg:text-md',
	[TextVariants.p2]: 'text-md lg:text-sm',
	[TextVariants.p3]: 'text-sm lg:text-xs',
	[TextVariants.little]: 'text-xs lg:text-xxs',
};

// Todo: Update for accessibility
export const Text = forwardRef(function Text(
	{ children, variant = TextVariants.p1, style }: TextProps,
	ref?: React.LegacyRef<HTMLParagraphElement>,
) {
	return (
		<p ref={ref} className={`text-txt_primary ${TEXT_VARIANTS[variant]} ${style}`}>
			{children}
		</p>
	);
});
