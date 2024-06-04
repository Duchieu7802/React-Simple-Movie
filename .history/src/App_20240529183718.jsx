import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MovieList from "./components/movie/MovieList";
function App() {
	return (
		<Fragment>
			<header className="header flex py-10 mb-10 justify-center items-center gap-x-5">
				<span className="text-primary">Home</span>
				<span className="text-white">Movies</span>
			</header>

			<section className="movies-layout page-container text-white pb-10">
				<h2 className="text-2xl capitalize font-semibold mb-10">Now playing</h2>
				<MovieList type="now_playing"></MovieList>
			</section>
			<section className="movies-layout page-container text-white pb-10">
				<h2 className="text-2xl capitalize font-semibold mb-10">
					Top rated movie
				</h2>
				<MovieList type="top_rated"></MovieList>
			</section>
			<section className="movies-layout page-container text-white pb-10">
				<h2 className="text-2xl capitalize font-semibold mb-10">Trending</h2>
				<MovieList type="popular"></MovieList>
			</section>
		</Fragment>
	);
}

export default App;
