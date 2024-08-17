import React from 'react';

export const FigmaDrawing = ({ isShown }: { isShown?: boolean }) => {
	return (
		<div className="h-[400px] w-full flex justify-center items-center gap-4 lg:h-full">
			<Tablet isShown={isShown} />
			<Pen />
		</div>
	);
};

const Tablet = ({ isShown }: { isShown?: boolean }) => {
	return (
		<div className="h-[50%] w-[80%] border-2 flex items-center justify-center border-txt_primary rounded-2xl sm:w-[60%]">
			<div className="h-[95%] w-[95%] border-2 border-txt_primary rounded-2xl overflow-hidden">
				<div
					className={`h-full w-full bg-cover bg-center bg-[url('/figma.png')] opacity-0 ${isShown && 'opacity-100'} transition ease-in-out duration-500`}
				/>
			</div>
		</div>
	);
};
const Pen = () => {
	return (
		<div className="h-[50%] w-[2.5%] ">
			<div className="h-[92.5%] w-full border-2 border-b-0 border-txt_primary rounded-t-2xl" />
			<div className="h-[7.5%] w-full border-2 border-txt_primary rounded-b-full" />
		</div>
	);
};
