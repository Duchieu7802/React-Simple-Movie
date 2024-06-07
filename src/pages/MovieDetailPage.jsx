import { useParams } from "react-router-dom";
import useSWR from "swr";
import { API_KEY, fetcher } from "../Config";

import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";

const MovieDetailPage = () => {
	const { movieID } = useParams();
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`,
		fetcher
	);
	if (!data) return null;
	const { backdrop_path, poster_path, genres, overview, title } = data;
	return (
		<div className="pb-20">
			<div className="relative h-[600px] w-full">
				<div className="absolute inset-0 bg-opacity-70 bg-black"></div>
				<div
					className="w-full h-full bg-cover bg-no-repeat"
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
					}}
				></div>
			</div>
			<div className="relative mx-auto w-full h-[400px] max-w-[600px] z-10 -mt-[200px] pb-10">
				<img
					src={`https://image.tmdb.org/t/p/original/${poster_path}`}
					alt=""
					className="w-full h-full object-cover rounded-lg"
				/>
			</div>
			<h1 className="text-white text-center font-semibold text-4xl mb-10">
				{title}
			</h1>
			{genres.length > 0 && (
				<div className="flex items-center justify-center gap-10 mb-10">
					{genres.map((item) => (
						<div
							className="border py-3 px-4 border-primary text-primary rounded-full"
							key={item.id}
						>
							{item.name}
						</div>
					))}
				</div>
			)}
			<div className=" leading-loose text-center max-w-[600px] mx-auto mb-20">
				{overview}
			</div>
			<MovieCast></MovieCast>
			<MovieVideo></MovieVideo>
			<MovieSimilar></MovieSimilar>
		</div>
	);
};
function MovieCast() {
	const { movieID } = useParams();
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`,
		fetcher
	);
	if (!data || data.cast.length <= 0) return null;
	const { cast } = data;
	return (
		<>
			<h2 className="text-center text-3xl mb-10 ">Casts</h2>
			{cast.length > 0 && (
				<div className="grid grid-cols-4 gap-5 rounded-lg">
					{cast.slice(0, 4).map((item) => (
						<div key={item.id} className="cast-item">
							<img
								src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
								alt=""
								className="w-full h-[300px] object-cover rounded-lg mb-3 "
							/>
							<h3 className="text-xl font-medium">{item.name}</h3>
						</div>
					))}
				</div>
			)}
		</>
	);
}
function MovieVideo() {
	const { movieID } = useParams();
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`,
		fetcher
	);
	if (!data || data.length <= 0) return null;
	const { results } = data;
	return (
		<>
			<div className="py-10">
				<div className="flex flex-col gap-10">
					{results.slice(1, 3).map((item) => (
						<div key={item.id}>
							<h4 className="p-3 mb-5 text-xl font-medium inline-block bg-secondary">
								{item.name}
							</h4>
							<div className="w-full aspect-video">
								<iframe
									width="853"
									height="480"
									src={`https://www.youtube.com/embed/${item.key}`}
									title="Kingdom of the Planet of the Apes | May 10"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
									className="w-full h-full object-fill"
								></iframe>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
function MovieSimilar() {
	const { movieID } = useParams();
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${API_KEY}`,
		fetcher
	);
	console.log("🚀 ~ MovieSimilar ~ data:", data);
	if (!data || data.length <= 0) return null;
	const { results } = data;
	return (
		<>
			<div className="py-10">
				<Swiper grabCursor={"true"} spacebeetween={40} slidesPerView={3}>
					{results.length > 0 &&
						results.map((item) => (
							<SwiperSlide key={item.id}>
								<MovieCard item={item}></MovieCard>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</>
	);
}
export default MovieDetailPage;
