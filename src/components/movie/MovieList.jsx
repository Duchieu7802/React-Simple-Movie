import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../Config";
import { useEffect, useState } from "react";
const MovieList = ({ type = "now_playing" }) => {
	const [movies, setMovies] = useState([]);
	const { data, error, isLoading } = useSWR(
		tmdbAPI.getMovieList(type),
		fetcher
	);
	useEffect(() => {
		setMovies(data?.results);
	}, [data]);

	return (
		<div className="movie-list ">
			<Swiper
				grabCursor={"true"}
				breakpoints={{
					320: { slidesPerView: 1, spaceBetween: 40 },
					480: { slidesPerView: 1, spaceBetween: 40 },
					768: { slidesPerView: 2, spaceBetween: 40 },
					1024: { slidesPerView: 3, spaceBetween: 40 },
				}}
			>
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
