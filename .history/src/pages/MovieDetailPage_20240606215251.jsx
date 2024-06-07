import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { API_KEY, fetcher } from "../Config";

const MovieDetailPage = () => {
	const movieID = useParams();
	console.log("🚀 ~ MovieDetailPage ~ movieID:", movieID);
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`,
		fetcher
	);
	console.log("🚀 ~ MovieDetailPage ~ data:", data);
	return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;
