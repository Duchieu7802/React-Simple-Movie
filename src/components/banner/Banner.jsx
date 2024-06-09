import useSWR from "swr";
import { API_KEY, fetcher } from "../../Config";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
const Banner = () => {
	const { data, error, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
		fetcher
	);
	const banner = data?.results;

	return (
		<section className=" banner h-[800px] banner page-container capitalize pb-10">
			<Swiper grabCursor={true} slidesPerView={"auto"}>
				{banner &&
					banner.length > 0 &&
					banner.map((item) => (
						<SwiperSlide key={item.id}>
							<BannerItem item={item}></BannerItem>
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	);
};
function BannerItem({ item }) {
	const {
		original_title,
		vote_average,
		backdrop_path,
		release_date,
		id,
		overview,
	} = item;
	const navigate = useNavigate();
	return (
		<div className="w-full h-full rounded-lg relative ">
			<div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
			<img
				src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
				alt=""
				className="w-full h-full object-cover rounded-lg"
			/>
			<div className="absolute left-10 bottom-5 text-white">
				<h2 className="font-bold mb-5 text-3xl">{original_title}</h2>
				<div className="flex items-center gap-x-2 mb-5">
					<div className="max-w-[600px] text-white ">{overview}</div>
				</div>
				<button
					onClick={() => navigate(`/movie/${id}`)}
					className="py-3 px-6 rounded-lg bg-primary"
				>
					Watch Now
				</button>
			</div>
		</div>
	);
}
export default Banner;
