import { InfinitySpin } from "react-loader-spinner";

const Loader = ({ visible }) => {
	return (
		<>
			<div
				style={{
					width: "100vw",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					zIndex: "99999",
					position: "fixed",
					backgroundColor: "rgba(0,0,0,0.2)",
					visibility: visible ? "visible" : "hidden",
				}}
			>
				<InfinitySpin color="#f7931e" />
			</div>
		</>
	);
};

export default Loader;
