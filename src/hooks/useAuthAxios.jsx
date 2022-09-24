import { useEffect } from "react";
import { axiosAuth } from "../api/axios";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useAuthAxios = () => {
	const refresh = useRefreshToken();
	const { auth } = useAuth;

	useEffect(() => {
		const requestInterceptor = axiosAuth.interceptors.request.use(
			(config) => {
				if (!config.headers["Authorization"]) {
					config.headers["Authorization"] = `Berear ${auth?.token}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseInterceptor = axiosAuth.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;

				if (error?.response?.status === 403 && !prevRequest?.sent) {
					prevRequest.sent = true;

					const newAccessToken = await refresh();
					prevRequest.headers[
						"Authorization"
					] = `Berear ${newAccessToken}`;

					return axiosAuth(prevRequest);
				}

				return Promise.reject(error);
			}
		);

		return () => {
			axiosAuth.interceptors.response.eject(responseInterceptor);
			axiosAuth.interceptors.request.eject(requestInterceptor);
		};
	}, [auth, refresh]);

	return axiosAuth;
};

export default useAuthAxios;
