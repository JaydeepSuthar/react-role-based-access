import React from "react";

import logo from "../../assets/logo.png";

const LoginPage = () => {
	return (
		<>
			<div className="flex h-screen w-screen flex-col items-center justify-center">
				<div className="card flex flex-col rounded-md border shadow-md shadow-slate-300 md:h-[490px] md:w-[450px] lg:h-[570px] lg:w-[500px]">
					<div className="brand mt-16 lg:mt-20">
						<img
							className="mx-auto w-56 object-cover md:w-64 lg:w-72"
							src={logo}
							alt="Progress Alliance"
							loading="lazy"
						/>
					</div>
					<div className="form my-20 mb-16 flex flex-col justify-items-start gap-4 p-4">
						<input
							className="rounded-2xl border p-3 px-5 outline-blue-600 placeholder:text-center placeholder:text-lg placeholder:font-medium"
							type="tel"
							name="number"
							id="number"
							placeholder="Enter Mobile Number Here"
						/>
						<input
							className="rounded-2xl border p-3 px-5 outline-blue-600 placeholder:text-center placeholder:text-lg placeholder:font-medium"
							type="number"
							// hidden={true}
							name="otp"
							id="otp"
							placeholder="Enter 6 Digit OTP Here"
						/>
						<button
							className="mx-1 rounded-md bg-orange-400 p-2 text-xl font-medium text-slate-100 hover:bg-orange-500"
							type="submit"
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
