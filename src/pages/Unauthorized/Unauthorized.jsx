import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
	return (
		<>
			<div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-slate-100">
				<h1 className="mb-5 text-2xl font-semibold">
					Sorry But You Don't Have Access to This Page
				</h1>
				<Link to="/" replace>
					<button className="border-none bg-black p-4 text-lg text-white shadow-sm">
						Go to Home Page
					</button>
				</Link>
			</div>
		</>
	);
};

export default UnauthorizedPage;
