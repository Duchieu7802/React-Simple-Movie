import { Fragment } from "react";
import "swiper/css";
//import { NavLink } from "react-router-dom";
import Banner from "./components/banner/Banner";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";
function App() {
	return (
		<Fragment>
			<Routes>
				<Route element={<Main></Main>}>
					<Route path="/" element={<Banner></Banner>}></Route>
					<Route path="/" element={<Homepage></Homepage>}></Route>
				</Route>
			</Routes>
		</Fragment>
	);
}

export default App;
