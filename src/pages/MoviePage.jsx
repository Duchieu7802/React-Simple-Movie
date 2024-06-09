import useSWR from "swr";
import { API_KEY, fetcher } from "../Config";
import MovieCard from "../components/movie/MovieCard";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/UseDebounce";
import ReactPaginate from "react-paginate";
const itemsPerPage = 20;
const MoviePage = () => {
	const [filter, setFilter] = useState(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
	);

	const [url, setUrl] = useState("");
	const queryDebounce = useDebounce(url, 500);

	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const [nextPage, setNextPage] = useState(1);

	const handleChangeQuery = (e) => {
		setUrl(e.target.value);
	};
	useEffect(() => {
		if (queryDebounce) {
			setFilter(
				`https://api.themoviedb.org/3/search/movie?query=${queryDebounce}&api_key=${API_KEY}&page=${nextPage}`
			);
		} else
			setFilter(
				`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${nextPage}`
			);
	}, [nextPage, queryDebounce]);

	const { data, error, isLoading } = useSWR(filter, fetcher);

	const movies = data?.results || [];
	useEffect(() => {
		if (!data || !data.total_results) return;
		setPageCount(Math.ceil(data.total_results / itemsPerPage));
	}, [data, itemOffset]);
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.total_results;
		setItemOffset(newOffset);
		setNextPage(event.selected + 1);
	};
	return (
		<div className="py-10 page-container">
			<div className="mb-10 flex ">
				<div className="flex-1">
					<input
						type="text"
						className="w-full p-4 bg-slate-800 text-white outline-none"
						placeholder="Type here to search..."
						onChange={handleChangeQuery}
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
			<div className="grid grid-cols-4 gap-10 mb-10">
				{movies.length > 0 &&
					movies.map((item) => (
						<MovieCard key={item.id} item={item}></MovieCard>
					))}
			</div>

			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				className="flex items-center justify-center gap-10"
			/>
		</div>
	);
};

export default MoviePage;
