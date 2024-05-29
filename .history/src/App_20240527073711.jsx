import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
	return (
		<Fragment>
			<header className="header flex py-10 mb-10 justify-center items-center gap-x-5">
				<span className="text-primary">Home</span>
				<span className="text-white">Movies</span>
			</header>
			<section className=" h-[400px] banner page-container">
				<div className="w-full h-full rounded-lg relative ">
					<div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
					<img
						src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/fsmsy/2019_04_27/avengersendgamepostercloseup.jpg.webp"
						alt=""
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<div className="absolute left-10 bottom-5 text-white">
					<h2 className="font-bold mb-5 text-3xl">Avengers: Endgame</h2>
					<div className="flex items-center gap-x-2 mb-5">
						<span className="px-5 py-2 border border-gray-500 rounded-lg">
							Action
						</span>

						<span className="px-5 py-2 border border-gray-500 rounded-lg">
							Adventure
						</span>
						<span className="px-5 py-2 border border-gray-500 rounded-lg">
							Drama
						</span>
					</div>
					<button className="py-3 px-6 rounded-lg bg-primary">Watch Now</button>
				</div>
			</section>
		</Fragment>
	);
}

export default App;
