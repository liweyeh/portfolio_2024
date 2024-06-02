import { WelcomeMsg } from '@components';

const Home = () => {
	return (
		<main className="bg-bg_primary h-screen">
			<WelcomeMsg />
			<div>about</div>
			<div>skill list</div>
			<div>projects</div>
			<div>contact</div>
		</main>
	);
};

export default Home;
