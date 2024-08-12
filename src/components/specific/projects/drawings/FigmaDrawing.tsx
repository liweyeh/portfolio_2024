import React from 'react';

export const FigmaDrawing = ({ isHovered }: { isHovered?: boolean }) => {
	return (
		<div className="h-full w-full flex justify-center items-center gap-4">
			<Tablet isHovered={isHovered} />
			<Pen />
		</div>
	);
};

const Tablet = ({ isHovered }: { isHovered?: boolean }) => {
	return (
		<div className="h-[50%] w-[60%] border-2 border-txt_primary rounded-2xl overflow-hidden">
			<div
				className={`h-full w-full bg-cover bg-no-repeat bg-[url('/figma.png')] opacity-0 ${isHovered && 'opacity-100'} transition ease-in-out duration-500`}
			/>
		</div>
	);
};
const Pen = () => {
	return (
		<div className="h-[50%] w-[5%] ">
			<div className="h-[90%] w-full border-2 border-b-0 border-txt_primary rounded-t-2xl" />
			<div className="h-[10%] w-full border-2 border-txt_primary rounded-b-full" />
		</div>
	);
};
