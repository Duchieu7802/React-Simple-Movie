const MovieCard = ({ name, vote, image, year }) => {
  name={item.original_title}
								vote={item.vote_average.toFixed(1)}
								image={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
								year={parseInt(item.release_date.substr(0, 4))}
	return (
		<div className="movie-card bg-slate-800 rounded-lg p-5 select-none">
			<img
				src={image}
				alt=""
				className="w-full h-[250px] object-cover rounded-lg mb-5"
			/>
			<h3 className="capitalize text-lg font-medium mb-3">{name}</h3>
			<div className="flex items-center justify-between opacity-50 mb-5">
				<span>{year}</span>
				<span>{vote}</span>
			</div>
			<button className="capitalize px-5 py-3 bg-primary rounded-lg w-full">
				watch now
			</button>
		</div>
	);
};

export default MovieCard;
