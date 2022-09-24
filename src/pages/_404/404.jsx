import "./404.css";
// import error from "../../assets/404.gif";
import error from "../../assets/logo.png";
import { Link } from "react-router-dom";

const _404 = () => {
	return (
		<>
			<div className="content__404 me-auto ">
				<img src={error} alt="" className="error " srcSet="" />
				<div className="typing-slider">
					<h2 className="text__404 text m-auto">Page Not Found...</h2>
				</div>

				<Link style={{ textDecoration: "none", color: "white" }} to="/">
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
						Back to Home
					</button>
				</Link>
			</div>
		</>
	);
};

export default _404;
