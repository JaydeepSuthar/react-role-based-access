import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";

const LogoutPage = () => {
	const { setAuth } = useAuth();

	setAuth({});

	return <Navigate to="login" replace />;
};

export default LogoutPage;
