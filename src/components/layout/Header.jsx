import { NavLink } from "react-router-dom";
const Header = () => {
	return (
		<header className="flex items-center justify-center py-5 lg:py-10 lg:mb-10 header gap-x-5">
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
			>
				Home
			</NavLink>
			<NavLink
				to="/movie"
				className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
			>
				Movies
			</NavLink>
		</header>
	);
};

export default Header;
