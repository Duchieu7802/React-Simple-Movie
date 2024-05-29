import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
	return (
		<Fragment>
			<header className="header flex py-10 mb-10 justify-center items-center gap-x-5">
				<span className="text-primary">Home</span>
				<span className="text-white">Movies</span>
			</header>
			<section className=" h-[400px] banner page-container capitalize pb-10">
				<div className="w-full h-full rounded-lg relative ">
					<div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
					<img
						src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2019/03/endgame-1280.jpg"
						alt=""
						className="w-full h-full object-cover rounded-lg"
					/>
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
						<button className="py-3 px-6 rounded-lg bg-primary">
							Watch Now
						</button>
					</div>
				</div>
			</section>
			<section className="movies-layout page-container text-white">
				<h2 className="text-2xl capitalize font-semibold mb-10">Now playing</h2>
				<div className="movie-list grid grid-cols-4 gap-10">
					<div className="movie-card bg-slate-800 rounded-lg p-5">
						<img
							src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2019/03/endgame-1280.jpg"
							alt=""
							className="w-full h-[250px	] object-cover rounded-lg mb-5"
						/>
						<h3 className="capitalize text-lg font-medium mb-3">
							Spiderman: Homecoming
						</h3>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default App;
