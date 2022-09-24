import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});

	useEffect(() => {
		console.log({ auth });
		let stringifiedValue = JSON.stringify(auth);

		localStorage.setItem("auth", stringifiedValue);

		return () => {
			localStorage.removeItem("auth");
		};
	}, [auth]);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
