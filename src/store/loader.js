import create from "zustand";
import { devtools } from "zustand/middleware";

const loaderState = (set) => ({
	isLoading: false,
	setLoading: (isLoading) => set({ isLoading }),
});

const useLoaderStore = create(
	devtools(loaderState, {
		name: "loading",
	})
);

export default useLoaderStore;
