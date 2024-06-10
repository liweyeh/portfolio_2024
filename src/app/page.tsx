'use client';
import { WelcomeMsg, ProgressBar, useProgress } from '@components';

const Home = () => {
	const { contentRef, scrollProgress } = useProgress();

	return (
		<>
			<main className="h-screen bg-bg_primary overflow-y-scroll" ref={contentRef}>
				<WelcomeMsg />
				<div className="bg-txt_primary h-screen">about</div>
				<div className="bg-txt_primary">skill list</div>
				<div className="bg-txt_primary">projects</div>
				<div className="bg-txt_primary">contact</div>
			</main>
			<ProgressBar progress={scrollProgress} />
		</>
	);
};

export default Home;
