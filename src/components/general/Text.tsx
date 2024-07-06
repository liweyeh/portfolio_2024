import React from 'react';

export enum TextVariants {
	h1,
	h2,
	h3,
	p,
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
	[TextVariants.p]: 'text-7xl',
};

export const Text = ({ children, variant = TextVariants.p, style }: TextProps) => {
	return <p className={`text-txt_primary ${TEXT_VARIANTS[variant]} ${style}`}>{children}</p>;
};
