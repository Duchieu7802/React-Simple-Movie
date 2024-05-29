import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../Config";
import { useEffect, useState } from "react";
const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const { data, error, isLoading } = useSWR(
		"https://api.themoviedb.org/3/movie/now_playing?api_key=84eb2ae36d8416146f44d030412bd242",
		fetcher
	);
	useEffect(() => {
		setMovies(data?.results);
	}, [data]);
	console.log("🚀 ~ MovieList ~ movies:", movies);
	return (
		<div className="movie-list">
			<Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={3}>
				{movies &&
					movies.length > 0 &&
					movies.map((item) => (
						<SwiperSlide key={item.id}>
							<MovieCard
								name={item.original_title}
								vote={item.vote_average.toFixed(1)}
								image={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
								year={parseInt(item.release_date.substr(0, 4))}
							></MovieCard>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default MovieList;
