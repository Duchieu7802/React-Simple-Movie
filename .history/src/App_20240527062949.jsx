import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
	return (
		<Fragment>
			<header className="header flex py-10 mb-10 justify-center items-center gap-x-5">
				<span className="text-primary">Home</span>
				<span className="text-white">Movies</span>
			</header>
			<section className=" h-[400px] banner page-container">
				<div className="w-full h-full relative rounded-lg bg-white">
					<img
						src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vietnamplus.vn%2Favengers-endgame-lap-ky-luc-trong-ngay-dau-cong-chieu-tai-bac-my-post566411.vnp&psig=AOvVaw2g5b-l85UaU0_JnJShz9PG&ust=1716852497846000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNj9qou8rIYDFQAAAAAdAAAAABAJ"
						alt=""
					/>
				</div>
			</section>
		</Fragment>
	);
}

export default App;
