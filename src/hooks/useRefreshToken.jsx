import React from "react";
import axios from "../api/axios";
import { login as serverLogin } from "../mock/login";
import useAuth from "./useAuth";

const useRefreshToken = () => {
	const { setAuth } = useAuth();

	const refresh = async () => {
		const response = serverLogin();

		const { token } = response;

		setAuth((prev) => {
			return {
				...prev,
				token,
			};
		});

		return token;
	};

	return refresh;
};

export default useRefreshToken;
