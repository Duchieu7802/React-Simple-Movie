import React from "react";

const MovieCard = () => {
	return (
		<div className="movie-card bg-slate-800 rounded-lg p-5">
			<img
				src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2019/03/endgame-1280.jpg"
				alt=""
				className="w-full h-[250px] object-cover rounded-lg mb-5"
			/>
			<h3 className="capitalize text-lg font-medium mb-3">
				Spiderman: Homecoming
			</h3>
			<div className="flex items-center justify-between opacity-50 mb-5">
				<span>2017</span>
				<span>7.4</span>
			</div>
			<button className="capitalize px-5 py-3 bg-primary rounded-lg w-full">
				watch now
			</button>
		</div>
	);
};

export default MovieCard;
