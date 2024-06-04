import { NavLink } from "react-router-dom";
const Header = () => {
	return (
		<header className="header flex py-10 mb-10 justify-center items-center gap-x-5">
			<span className="text-primary">Home</span>
			<span className="text-white">Movies</span>
		</header>
	);
};

export default Header;
