import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const sidebarState = (set) => ({
	isCollapsed: false,
	toggleCollapsed: () =>
		set((state) => ({ isCollapsed: !state.isCollapsed })),
});

const useSidebarStore = create(
	devtools(persist(sidebarState), {
		name: "Sidebar",
		getStorage: () => sessionStorage,
	})
);

export default useSidebarStore;
