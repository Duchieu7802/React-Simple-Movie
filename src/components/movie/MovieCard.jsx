import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
	const { original_title, vote_average, backdrop_path, release_date, id } =
		item;
	const navigate = useNavigate();
	return (
		<div className="movie-card bg-slate-800 rounded-lg p-5 select-none text-white flex flex-col ">
			<div className="flex flex-col flex-1">
				<img
					src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
					alt=""
					className="w-full h-[250px] object-cover rounded-lg mb-5"
				/>
				<h3 className="capitalize text-lg font-medium mb-3">
					{original_title}
				</h3>
				<div className="flex items-center justify-between opacity-50 mb-5">
					<span>{new Date(release_date).getFullYear()}</span>
					<span>{vote_average.toFixed(1)}</span>
				</div>
			</div>

			<button
				onClick={() => navigate(`/movie/${id}`)}
				className="capitalize px-5 py-3 bg-primary rounded-lg w-full mb-auto"
			>
				watch now
			</button>
		</div>
	);
};

export default MovieCard;
