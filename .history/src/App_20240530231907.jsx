import { Fragment } from "react";
import "swiper/css";
//import { NavLink } from "react-router-dom";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<Fragment>
			<Routes>
				<Route path="/"></Route>
			</Routes>
		</Fragment>
	);
}

export default App;
