import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "./MovieCard";
import useSWR from "swr";
import { API_KEY, fetcher } from "../../Config";
import { useEffect, useState } from "react";
const MovieList = ({ type = "now_playing" }) => {
	const [movies, setMovies] = useState([]);
	const { data, error, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`,
		fetcher
	);
	useEffect(() => {
		setMovies(data?.results);
	}, [data]);

	return (
		<div className="movie-list">
			<Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={3}>
				{movies &&
					movies.length > 0 &&
					movies.map((item) => (
						<SwiperSlide key={item.id}>
							<MovieCard item={item}></MovieCard>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default MovieList;
