import React from 'react';
export const WaterInsightDrawing = ({ isShown }: { isShown?: boolean }) => {
	return (
		<div className="h-full min-h-[400px] w-full relative skew-y-[24deg] xl:translate-x-14">
			<div
				className={`absolute top-0 right-0 w-full h-full flex flex-col justify-center items-center overflow-hidden`}
			>
				<div className={`h-full w-full flex flex-col items-center justify-center sm:w-5/6`}>
					<div className={`h-[50%] w-[80%] flex flex-col bg-black `}>
						<div
							className={`h-full border-solid border-2 border-txt_primary rounded-2xl flex items-center justify-center`}
						/>
					</div>
				</div>
			</div>
			<div
				className={`absolute top-2 right-2 w-full h-full flex flex-col justify-center items-center overflow-hidden`}
			>
				<div className={`h-full w-full flex flex-col items-center justify-center  sm:w-5/6`}>
					<div className={`h-[50%] w-[80%] flex flex-col bg-black `}>
						<div
							className={`h-[90%] border-solid border-x-2 border-t-2 border-txt_primary rounded-t-2xl flex items-center justify-center overflow-hidden`}
						>
							<div
								className={`h-full w-full bg-cover bg-[url('/waterinsights.png')] opacity-0 ${isShown && 'opacity-100'} transition ease-in-out duration-500`}
							/>
						</div>

						<div
							className={`h-[10%] border-2 border-txt_primary rounded-b-2xl flex justify-center items-center`}
						>
							<div className={`h-[50%] w-10 border-2 border-txt_primary rounded-full`} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
