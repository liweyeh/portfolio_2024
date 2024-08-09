import React from 'react';

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
	[TextVariants.h1]: 'text-7xl',
	[TextVariants.h2]: 'text-5xl',
	[TextVariants.h3]: 'text-3xl',
	[TextVariants.subtitle]: 'text-3xl !text-txt_secondary',
	[TextVariants.p1]: 'text-2xl',
	[TextVariants.p2]: 'text-xl',
	[TextVariants.p3]: 'text-lg',
	[TextVariants.little]: 'text-sm',
};

// Todo: Update for accessibility
export const Text = ({ children, variant = TextVariants.p1, style }: TextProps) => {
	return <p className={`text-txt_primary ${TEXT_VARIANTS[variant]} ${style}`}>{children}</p>;
};
