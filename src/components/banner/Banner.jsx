import useSWR from "swr";
import { API_KEY, fetcher, tmdbAPI } from "../../Config";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
const Banner = () => {
	const { data, error, isLoading } = useSWR(
		tmdbAPI.getMovieList("upcoming"),
		fetcher
	);
	const banner = data?.results;

	return (
		<section className=" banner max-h-[800px] banner page-container capitalize pb-10">
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
		<div className="relative w-full h-full rounded-lg ">
			<div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
			<img
				src={tmdbAPI.imageOriginal(backdrop_path)}
				alt=""
				className="object-cover w-full h-full rounded-lg"
			/>
			<div className="absolute text-white left-10 bottom-5">
				<h2 className="mb-3 text-base font-bold lg:text-3xl">
					{original_title}
				</h2>
				<div className="flex items-center mb-5 gap-x-2">
					<div className=" max-w-[600px] pr-5 textResponsiveContent text-white  ">
						{overview}
					</div>
				</div>
				<button
					onClick={() => navigate(`/movie/${id}`)}
					className="p-2 text-xs rounded-lg lg:p-3 sm:text-sm lg:text-base bg-primary"
				>
					Watch Now
				</button>
			</div>
		</div>
	);
}
export default Banner;
