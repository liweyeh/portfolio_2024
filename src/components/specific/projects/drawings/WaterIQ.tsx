import React from 'react';

export const WaterIQ = ({ isHovered }: { isHovered?: boolean }) => {
	return (
		<div className="h-full w-full flex justify-center items-center skew-x-[-30deg] skew-y-[12deg]">
			<div className={`w-[30%] h-[55%] flex relative items-center`}>
				<div
					className={`h-full w-full border-solid border-2 border-txt_primary rounded-2xl overflow-hidden bg-bg_primary z-10`}
				>
					<div
						className={`h-full w-full bg-contain bg-[url('/waterIQ.png')] opacity-0 ${isHovered && 'opacity-100'} transition ease-in-out duration-500`}
					/>
				</div>
				<div
					className={`absolute right-[-1rem] top-2 h-full w-full border-solid border-2 border-txt_primary rounded-2xl overflow-hidden`}
				/>
			</div>
		</div>
	);
};
