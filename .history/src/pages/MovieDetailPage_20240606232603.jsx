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
	if (!data) return null;
	const { backdrop_path, poster_path, genres, overview, title } = data;
	console.log("🚀 ~ MovieDetailPage ~ backdrop_path:", backdrop_path);
	return (
		<div className="pb-10">
			<div
				className="w-full h-screen bg-cover bg-no-repeat"
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
				}}
			></div>
		</div>
	);
};

export default MovieDetailPage;
