import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
	return (
		<Fragment>
			<header className="header flex py-10 mb-5 justify-center items-center gap-x-5">
				<span className="text-white">Home</span>
				<span className="text-white">Movies</span>
			</header>
		</Fragment>
	);
}

export default App;
