import axios from "axios";

const BASE_URL = import.meta.env.PUBLIC_API_URL || ``;

export default axios.create({
	baseURL: BASE_URL,
	withCredentials: true
});

export const axiosAuth = axios.create({
	baseURL: BASE_URL, 
	withCredentials: true
});
