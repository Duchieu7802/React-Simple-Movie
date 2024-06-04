import { Fragment } from "react";
import "swiper/css";
//import { NavLink } from "react-router-dom";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
function App() {
	return (
		<Fragment>
			<Header></Header>
			<Banner></Banner>
		</Fragment>
	);
}

export default App;
