import { Toaster } from "react-hot-toast";
import { FaHome } from "react-icons/fa";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Loader from "./components/loader/Loader";
import Sidebar from "./components/sidebar/Sidebar";
import LoginPage from "./pages/Login/Login";
import useLoaderStore from "./store/loader";
import RequireAuth from "./helpers/RequiredAuth";


let routes = [
	{
		name: "Index",
		icon: <FaHome />,
		routes: [
			{ name: "Home", path: "/" },
			{ name: "Sub Home", path: "/sub" },
		],
	},
	{
		name: "About",
		icon: <FaHome />,
		path: "/about",
	},
];

const App = () => {
	const isLoading = useLoaderStore((state) => state.isLoading);

	return (
		<>
			<Toaster />
			<Loader visible={isLoading} />

			<Routes>
				<Route path="login" element={<LoginPage />} />

				<Route element={<SidebarLayout routes={routes} />}>
					<Route element={<RequireAuth />}>
						<Route path="/">
							<Route index element={<HomePage />} />
							<Route path="sub" element={<SubHomePage />} />
						</Route>
						<Route path="about" element={<AboutPage />} />
						<Route path="unauthorized" element={<LoginPage />} />
						<Route path="*" element={<LoginPage />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
};

const HomePage = () => {
	return (
		<>
			<h1>Home Page</h1>
			<Link to="/login" state={{ from: "/" }}>
				login
			</Link>
			<Link to="/about">about</Link>
		</>
	);
};

const SubHomePage = () => {
	return (
		<>
			<h1>Sub Home Page</h1>
			<Link to="/login" state={{ from: "/" }}>
				login
			</Link>
			<Link to="/about">about</Link>
		</>
	);
};

const AboutPage = () => {
	return (
		<>
			<h1>About Page</h1>
			<Link to="/login" state={{ from: "/about" }}>
				login
			</Link>
		</>
	);
};

const SidebarLayout = ({ routes }) => {
	return (
		<>
			<div className="main">
				<aside className="sidebar">
					<Sidebar routes={routes} />
				</aside>

				<main className="content">
					<div className="container mt-3">
						<Outlet />
					</div>
				</main>
			</div>
		</>
	);
};

export default App;
