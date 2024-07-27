import type { Config } from 'tailwindcss';

export const CUSTOM_COLORS = {
	black: '#000000',
	oxford_blue: '#14213D',
	orange: '#FCA311',
	battleship_gray: '#878787',
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
			boxShadow: {
				'3xl': '0 0 30px 6px',
			},
			colors: {
				bg_primary: CUSTOM_COLORS.black,
				highlight: CUSTOM_COLORS.orange,
				txt_primary: CUSTOM_COLORS.white,
				txt_secondary: CUSTOM_COLORS.battleship_gray,
			},
			keyframes: {
				slide_right: {
					'0%': { transform: 'translateX(-50%)', opacity: '0%' },
					'100%': { transform: 'translateX(0%)', opacity: '100%' },
				},
				slide_left: {
					'0%': { transform: 'translateX(50%)', opacity: '0%' },
					'100%': { transform: 'translateX(0%)', opacity: '100%' },
				},
				fade_in: {
					'0%': { opacity: '0%' },
					'100%': { opacity: '100%' },
				},
				typing: {
					'0%': { width: '0%', opacity: '0%' },
					'34%': { width: '0%', opacity: '0%' },
					'35%': { width: '0%', opacity: '100%' },
					'100%': { width: '100%' },
				},
				blink_caret: {
					'from, to': { borderColor: 'transparent' },
					'50%': { borderColor: CUSTOM_COLORS.white },
				},
			},
			animation: {
				slide_right: 'slide_right 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
				slide_left: 'slide_left 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
				fade_in: 'fade_in 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s both',
				typing: 'typing 5s steps(35, end), blink_caret 1s 5s infinite',
			},
		},
	},
	plugins: [],
};
export default config;
