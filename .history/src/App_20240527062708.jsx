import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
	return (
		<Fragment>
			<header className="header flex py-10 mb-10 justify-center items-center gap-x-5">
				<span className="text-primary">Home</span>
				<span className="text-white">Movies</span>
			</header>
			<section className="page-container h-[400px] banner">
				<div className="w-full h-full relative rounded-lg"></div>
			</section>
		</Fragment>
	);
}

export default App;
