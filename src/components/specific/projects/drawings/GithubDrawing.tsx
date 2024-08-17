import React from 'react';
import { FaGithub } from 'react-icons/fa6';
export const GithubDrawing = ({ isShown }: { isShown?: boolean }) => {
	return (
		<div className="h-[400px] flex justify-center items-center lg:h-full">
			<div className="w-[80%] max-w-[350px] relative lg:w-[60%]">
				<FaGithub className="w-full h-full" />
				<div
					className={`absolute top-0 h-full w-full bg-cover bg-no-repeat bg-[url('/github.png')] rounded-full opacity-0 ${isShown && 'opacity-100'} transition ease-in-out duration-500`}
				/>
			</div>
		</div>
	);
};
