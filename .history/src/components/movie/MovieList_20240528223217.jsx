import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../Config";
import { useState } from "react";
const MovieList = () => {
	const { data, error, isLoading } = useSWR(
		"https://api.themoviedb.org/3/movie/now_playing?api_key=84eb2ae36d8416146f44d030412bd242",
		fetcher
	);
	const [movies, setMovies] = useState([]);
	return (
		<div className="movie-list">
			<Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={3}>
				<SwiperSlide>
					<MovieCard></MovieCard>
				</SwiperSlide>
				<SwiperSlide>
					<MovieCard></MovieCard>
				</SwiperSlide>
				<SwiperSlide>
					<MovieCard></MovieCard>
				</SwiperSlide>
				<SwiperSlide>
					<MovieCard></MovieCard>
				</SwiperSlide>
				<SwiperSlide>
					<MovieCard></MovieCard>
				</SwiperSlide>
				<SwiperSlide>
					<MovieCard></MovieCard>
				</SwiperSlide>
				<SwiperSlide>
					<MovieCard></MovieCard>
				</SwiperSlide>
				<SwiperSlide>
					<MovieCard></MovieCard>
				</SwiperSlide>
				<SwiperSlide>
					<MovieCard></MovieCard>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default MovieList;
