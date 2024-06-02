import React from 'react';

interface TextProps extends React.CSSProperties {
	children: React.ReactNode;
	variant?: 'h1' | 'h2' | 'h3' | 'subtitle' | 'p';
	style?: string;
}

export const Text = ({ children, variant = 'p', style }: TextProps) => {
	return <p className={`text-txt_primary ${style}`}>{children}</p>;
};
