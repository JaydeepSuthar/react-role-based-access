import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
	return (
		<>
			<h1>Sorry But You Don't Have Access to This Page</h1>
			<Link to="/" replace>
				<button className="border-none bg-black p-4 text-lg text-white shadow-sm">
					Go to Home Page
				</button>
			</Link>
		</>
	);
};

export default UnauthorizedPage;
