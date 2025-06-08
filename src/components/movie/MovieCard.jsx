import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../Config";

const MovieCard = ({ item }) => {
	const { original_title, vote_average, backdrop_path, release_date, id } =
		item;
	const navigate = useNavigate();
	return (
		<div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
			<img
				src={tmdbAPI.image500(backdrop_path)}
				alt=""
				className="w-full h-[250px] object-cover rounded-lg mb-5"
			/>
			<div className="flex flex-col flex-1 ">
				<h3 className="mb-3 font-medium capitalize textResponsiveTitle ">
					{original_title}
				</h3>
				<div className="flex items-center justify-between mb-10 text-sm opacity-50">
					<span>{new Date(release_date).getFullYear()}</span>
					<span>{vote_average.toFixed(1)}</span>
				</div>
				<button
					onClick={() => navigate(`/movie/${id}`)}
					className="flex-1 w-full px-5 py-3 mt-auto capitalize rounded-lg bg-primary "
				>
					watch now
				</button>
			</div>
		</div>
	);
};

export default MovieCard;
