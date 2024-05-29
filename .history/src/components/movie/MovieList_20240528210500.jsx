import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./components/movie/MovieCard";
import "swiper/css";
const MovieList = () => {
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
