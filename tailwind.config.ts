import type { Config } from 'tailwindcss';

export const CUSTOM_COLORS = {
	black: '#000000',
	oxford_blue: '#14213D',
	orange: '#FCA311',
	platinum: '#E5E5E5',
	white: '#FFFFFF',
};

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				bg_primary: CUSTOM_COLORS.black,
				highlight: CUSTOM_COLORS.orange,
				txt_primary: CUSTOM_COLORS.platinum,
			},
			keyframes: {
				slide_right: {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			animation: {
				slide_right: 'slide_right 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
			},
		},
	},
	plugins: [],
};
export default config;
