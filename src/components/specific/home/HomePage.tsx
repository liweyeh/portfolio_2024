'use client';
import React from 'react';
import { WelcomeMsg, About, Skills, Projects, ProgressBar, useProgress } from '@components';

export const HomePage = () => {
	const { contentRef, scrollProgress } = useProgress();

	return (
		<main className="h-screen bg-bg_primary overflow-y-scroll" ref={contentRef}>
			<WelcomeMsg />
			<About />
			<Skills />
			<Projects />
			<ProgressBar progress={scrollProgress} />
		</main>
	);
};
