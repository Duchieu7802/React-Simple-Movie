import { NavLink } from "react-router-dom";
const Header = () => {
	return (
		<header className="header flex py-10 mb-10 justify-center items-center gap-x-5">
			<NavLink
				to="/"
				className={({ isActive }) => (}
			>
				Home
			</NavLink>
			<NavLink to="/movies" className="text-white">
				Movies
			</NavLink>
		</header>
	);
};

export default Header;
