import React from 'react';
import { FaGithub } from 'react-icons/fa6';
export const GithubDrawing = ({ isHovered }: { isHovered?: boolean }) => {
	return (
		<div className="h-full flex justify-center items-center">
			<div className="w-[60%] relative">
				<FaGithub className="w-full h-full" />
				<div
					className={`absolute top-0 h-full w-full bg-cover bg-no-repeat bg-[url('/github.png')] rounded-full opacity-0 ${isHovered && 'opacity-100'} transition ease-in-out duration-500`}
				/>
			</div>
		</div>
	);
};
