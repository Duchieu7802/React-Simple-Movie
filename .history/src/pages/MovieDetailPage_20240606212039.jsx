import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { API_KEY, fetcher } from "../Config";

const MovieDetailPage = () => {
	const movieID = useParams();
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`,
		fetcher
	);
	console.log("🚀 ~ MovieDetailPage ~ param:", data);
	return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;
