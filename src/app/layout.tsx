import type { Metadata } from 'next';
import './globals.css';
import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: "Liwei Yeh's Portfolio",
	description: "This is Liwei Yeh's portfolio, 2024 version",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${exo2.className}`}>{children}</body>
		</html>
	);
}
