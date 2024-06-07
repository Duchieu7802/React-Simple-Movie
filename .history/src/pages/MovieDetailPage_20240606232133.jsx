import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { API_KEY, fetcher } from "../Config";

const MovieDetailPage = () => {
	const { movieID } = useParams();
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`,
		fetcher
	);
	console.log("🚀 ~ MovieDetailPage ~ data:", data);
	const { backdrop_path } = data;
	return (
		<div className="pb-10">
			<div

			// style={{
			// 	backgroundImage: `https://image.tmdb.org/t/p/original/${backdrop_path}`,
			// }}
			></div>
		</div>
	);
};

export default MovieDetailPage;
