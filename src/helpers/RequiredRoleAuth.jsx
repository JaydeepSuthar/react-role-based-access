import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

const RequireRoleAuth = ({ allowedRoles }) => {
	const { auth } = useAuth();
	const location = useLocation();

	return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
		<Outlet />
	) : auth?.user ? (
		<Navigate
			to="unauthorized"
			state={{ from: location.pathname }}
			replace
		/>
	) : (
		<Navigate to="login" state={{ from: location.pathname }} replace />
	);
};

export default RequireRoleAuth;
