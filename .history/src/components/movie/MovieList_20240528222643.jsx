import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../Config";
const MovieList = () => {
	const { data, error, isLoading } = useSWR("/api/user/123", fetcher);
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
