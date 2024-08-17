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
	[TextVariants.h1]: 'text-5xl lg:text-7xl',
	[TextVariants.h2]: 'text-3xl lg:text-5xl',
	[TextVariants.h3]: 'text-xl lg:text-3xl',
	[TextVariants.subtitle]: 'text-xl lg:text-3xl !text-txt_secondary',
	[TextVariants.p1]: 'text-lg lg:text-2xl',
	[TextVariants.p2]: 'text-md lg:text-xl',
	[TextVariants.p3]: 'text-sm lg:text-lg',
	[TextVariants.little]: 'text-xs lg:text-sm',
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
