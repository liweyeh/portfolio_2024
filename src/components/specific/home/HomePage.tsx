'use client';
import React from 'react';
import { WelcomeMsg, About, ProgressBar, useProgress } from '@components';

export const HomePage = () => {
	const { contentRef, scrollProgress } = useProgress();

	return (
		<main className="h-screen bg-bg_primary overflow-y-scroll" ref={contentRef}>
			<WelcomeMsg />
			<About />
			<div className="bg-txt_primary">skill list</div>
			<div className="bg-txt_primary">projects</div>
			<div className="bg-txt_primary">contact</div>
			<ProgressBar progress={scrollProgress} />
		</main>
	);
};
