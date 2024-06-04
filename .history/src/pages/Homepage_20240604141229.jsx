import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/banner/Banner";

const Homepage = () => {
	return (
		<Fragment>
			<Banner></Banner>
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
};

export default Homepage;
