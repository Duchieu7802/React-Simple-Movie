import { Fragment } from "react";
import "swiper/css";
//import { NavLink } from "react-router-dom";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";
function App() {
	return (
		<Fragment>
			<Routes>
				<Route element={<Main></Main>}>
					<Route path="/" element={<Homepage></Homepage>}></Route>
				</Route>
			</Routes>
		</Fragment>
	);
}

export default App;
