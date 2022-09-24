import "./404.css";
import error from "../../assets/404.gif";
import { Link } from "react-router-dom";

const _404 = () => {
	return (
		<>
			<div className="content__404 me-auto ">
				<img src={error} alt="" className="error " srcset="" />
				<div className="typing-slider">
					<h2 className="text__404 text m-auto">Page Not Found...</h2>
				</div>

				<button
					className="back__to__home__btn"
					style={{
						backgroundColor: "#f7931e",
						padding: "10px",
						borderRadius: "5px",
						border: "none",
						marginTop: "20px",
					}}
				>
					<Link
						style={{ textDecoration: "none", color: "white" }}
						to="/"
					>
						Back to Home
					</Link>
				</button>
			</div>
		</>
	);
};

export default _404;
