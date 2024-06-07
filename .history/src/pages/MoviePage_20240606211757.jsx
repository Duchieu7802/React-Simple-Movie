import useSWR from "swr";
import { API_KEY, fetcher } from "../Config";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
	const { data, error, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
		fetcher
	);
	const movies = data?.results || [];
	return (
		<div className="py-10 page-container">
			<div className="mb-10 flex ">
				<div className="flex-1">
					<input
						type="text"
						className="w-full p-4 bg-slate-800 text-white outline-none"
						placeholder="Type here to search..."
					/>
				</div>
				<button className="p-4 bg-primary text-white ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
				</button>
			</div>
			<div className="grid grid-cols-4 gap-10">
				{movies.length > 0 &&
					movies.map((item) => (
						<MovieCard key={item.id} item={item}></MovieCard>
					))}
			</div>
		</div>
	);
};

export default MoviePage;
