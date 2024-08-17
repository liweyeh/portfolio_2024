import React from 'react';

export const WaterIQ = ({ isShown }: { isShown?: boolean }) => {
	return (
		<div className="h-full w-full min-h-[400px] flex justify-center items-center skew-x-[-30deg] skew-y-[12deg]">
			<div className={`w-[50%] min-h-[250px] flex relative items-center sm:w-[30%] lg:h-[55%]`}>
				<div
					className={`absolute top-0 right-0 h-full w-full border-solid border-2 border-txt_primary rounded-2xl overflow-hidden bg-bg_primary z-10`}
				>
					<div
						className={`h-full w-full bg-center bg-cover bg-[url('/waterIQ.png')] opacity-0 ${isShown && 'opacity-100'} transition ease-in-out duration-500`}
					/>
				</div>
				<div
					className={`absolute right-[-1rem] top-2 h-full w-full border-solid border-2 border-txt_primary rounded-2xl overflow-hidden`}
				/>
			</div>
		</div>
	);
};
