import { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const Homepage = () => {
	return (
		<Fragment>
			<section className="pb-10 text-white movies-layout page-container ">
				<h2 className="mb-10 text-2xl font-semibold capitalize">Now playing</h2>
				<MovieList type="now_playing"></MovieList>
			</section>
			<section className="pb-10 text-white movies-layout page-container">
				<h2 className="mb-10 text-2xl font-semibold capitalize">
					Top rated movie
				</h2>
				<MovieList type="top_rated"></MovieList>
			</section>
			<section className="pb-10 text-white movies-layout page-container">
				<h2 className="mb-10 text-2xl font-semibold capitalize">Trending</h2>
				<MovieList type="popular"></MovieList>
			</section>
		</Fragment>
	);
};

export default Homepage;
