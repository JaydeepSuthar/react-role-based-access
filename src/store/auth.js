import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = (set) => ({
	isAuthenticated: false,
	setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
});

const useAuthStore = create(
	devtools(persist(authStore), {
		name: "Auth",
		getStorage: () => localStorage,
	})
);

export default useAuthStore;
