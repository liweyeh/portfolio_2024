'use client';
import React from 'react';
import { WelcomeMsg, About, Skills, Projects, ProgressBar, useProgress } from '@components';
import { Analytics } from '@vercel/analytics/react';

export const HomePage = () => {
	const { contentRef, scrollProgress } = useProgress();

	return (
		<main className="h-screen bg-bg_primary overflow-y-scroll overflow-x-hidden" ref={contentRef}>
			<WelcomeMsg />
			<About />
			<Skills />
			<Projects />
			<ProgressBar progress={scrollProgress} />
			<Analytics />
		</main>
	);
};
