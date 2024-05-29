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
				<div className="w-full h-full relative rounded-lg ">
					<img
						src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/fsmsy/2019_04_27/avengersendgamepostercloseup.jpg.webp"
						alt=""
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<div className="absolute left-5 bottom-5 text-white">
					<h2>Avenger: Endgame</h2>
				</div>
			</section>
		</Fragment>
	);
}

export default App;
