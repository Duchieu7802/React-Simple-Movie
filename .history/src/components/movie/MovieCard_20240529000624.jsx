const MovieCard = ({ name, vote, image, year }) => {
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
