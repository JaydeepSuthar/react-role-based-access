import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const activeLink = (set) => ({
	activeLink: "/",
	setActiveLink: (newActiveLink) =>
		set(({ activeLink: newActiveLink })),
});

const activeMenuLink = (set) => ({
	activeMenuLink: "",
	setActiveMenuLink: (newActiveMenuLink) =>
		set(({ activeMenuLink: newActiveMenuLink })),
});

const activeSubMenuLink = (set) => ({
	activeSubMenuLink: "",
	setActiveSubMenuLink: (newActiveSubMenuLink) =>
		set({ activeSubMenuLink: newActiveSubMenuLink }),
});


export const useActiveLink = create(
	devtools(persist(activeLink, { name: "activeLink" }))
);

export const useActiveMenuLink = create(
	devtools(persist(activeMenuLink, { name: "activeMenuLink" }))
);

export const useActiveSubMenuLink = create(
	devtools(persist(activeSubMenuLink, { name: "activeSubMenuLink" }))
);
