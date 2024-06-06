import { WelcomeMsg } from '@components';

const Home = () => {
	return (
		<main className="bg-bg_primary">
			<WelcomeMsg />
			<div className="bg-txt_primary h-screen">about</div>
			<div className="bg-txt_primary">skill list</div>
			<div className="bg-txt_primary">projects</div>
			<div className="bg-txt_primary">contact</div>
		</main>
	);
};

export default Home;
