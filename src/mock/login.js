export const login = (mobile_number) => {
	return new Promise(resolve => {
		let user = {
			id: `07`,
			role: 'MENTOR',
			name: "Jaydeep Suthar",
			mobile_number: 7405399675
		};

		let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3Iiwicm9sZSI6WyIwMDciXSwiaWF0IjoxNjYzOTk3NDg0LCJleHAiOjE2NjM5OTc1NDR9.awelnXBXlPJwIQK8UKwpLc0i5BAKRP2deCeC1mLNlwE`;

		let roles = [7500];

		resolve({
			roles,
			user,
			token
		});
	});
};
