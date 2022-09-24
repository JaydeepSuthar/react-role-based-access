// import "react-pro-sidebar/dist/css/styles.css";
import { FaBars } from "react-icons/fa";

import {
	Menu,
	MenuItem,
	ProSidebar,
	SidebarContent,
	SidebarHeader,
	SubMenu,
} from "react-pro-sidebar";

import { Link, useLocation } from "react-router-dom";

import useSidebarStore from "../../store";
// * Sidebar Active Link
import {
	useActiveLink,
	useActiveMenuLink,
	useActiveSubMenuLink,
} from "../../store/sidebarActiveStatus";

const Sidebar = ({ routes }) => {
	const location = useLocation();

	// ! Sidebar Active Link start
	// * getters
	const activeLink = useActiveLink((state) => state.activeLink);
	const activeMenuLink = useActiveMenuLink((state) => state.activeMenuLink);
	const activeSubMenuLink = useActiveSubMenuLink(
		(state) => state.activeSubMenuLink
	);

	// * setters
	const setActiveLink = useActiveLink((state) => state.setActiveLink);
	const setActiveMenuLink = useActiveMenuLink(
		(state) => state.setActiveMenuLink
	);
	const setActiveSubMenuLink = useActiveSubMenuLink(
		(state) => state.setActiveSubMenuLink
	);
	// ! Sidebar Active Link over

	console.log(`%c current path: ${location.pathname}`, `color: orange`);

	const collapsed = useSidebarStore((state) => state.isCollapsed);
	const toggleCollapsed = useSidebarStore((state) => state.toggleCollapsed);

	return (
		<>
			<ProSidebar
				style={{ overflowY: "auto", height: "100vh" }}
				collapsed={collapsed}
			>
				<SidebarHeader
					className={`flex justify-content-${
						collapsed ? "center" : "end"
					} p-4`}
				>
					<div className="flex">
						<div className="row">
							<div
								className={`flex justify-content-${
									collapsed ? "center" : "end"
								}`}
							>
								<div className="col">
									<FaBars
										style={{ cursor: "pointer" }}
										onClick={toggleCollapsed}
									/>
								</div>
							</div>
						</div>
					</div>
				</SidebarHeader>
				<SidebarContent>
					<Menu iconShape="square">
						{routes.map((route, idx) => {
							if (route.routes) {
								return (
									<SubMenu
										key={route.name}
										title={route.name}
										icon={route.icon}
										className={
											activeMenuLink === route.name &&
											"activeMenuClass"
										}
									>
										{route.routes.map((subRoute, idx) => {
											if (subRoute.routes) {
												return (
													<SubMenu
														// title={route.name}
														key={subRoute.name}
														title={subRoute.name}
														// icon={route.icon}
														className={
															activeSubMenuLink ===
																subRoute.name &&
															"activeMenuClass"
														}
													>
														{subRoute.routes.map(
															(
																subSubRoute,
																idx
															) => (
																<MenuItem
																	key={
																		subSubRoute.name
																	}
																	className={
																		activeLink ===
																			subSubRoute.path &&
																		"activeClass"
																		// activeLink
																		// 	.state
																		// 	.activeLink.includes(subSubRoute.path) &&
																		// 	// subSubRoute.path &&
																		// "activeClass"
																	}
																	onClick={() => {
																		setActiveLink(
																			// `${subSubRoute.path},${route.name}`
																			subSubRoute.path
																		);
																		setActiveMenuLink(
																			// `${subRoute.name},${route.name}`
																			route.name
																		);
																		setActiveSubMenuLink(
																			subRoute.name
																		);
																	}}
																>
																	{
																		subSubRoute.name
																	}

																	{location.pathname ==
																		subSubRoute.path &&
																		setActiveLink(
																			subSubRoute.path
																			// `${subSubRoute.path},${route.name}`
																		)}
																	{location.pathname ==
																		subSubRoute.path &&
																		setActiveMenuLink(
																			// `${subRoute.name},${route.name}`
																			route.name
																		) &&
																		setActiveSubMenuLink(
																			subRoute.name
																		)}
																	<Link
																		to={
																			subSubRoute.path
																		}
																	/>
																</MenuItem>
															)
														)}
													</SubMenu>
												);
											}

											return (
												<MenuItem
													key={subRoute.name}
													className={
														activeLink ===
															subRoute.path &&
														"activeClass"
													}
													onClick={() => {
														setActiveLink(
															subRoute.path
														);
														setActiveMenuLink(
															route.name
														);
														setActiveSubMenuLink(
															""
														);
													}}
												>
													{subRoute.name}

													{location.pathname ==
														subRoute.path &&
														setActiveLink(
															subRoute.path
														)}
													{location.pathname ==
														subRoute.path &&
														setActiveMenuLink(
															route.name
														) &&
														setActiveSubMenuLink(
															""
														)}
													<Link to={subRoute.path} />
												</MenuItem>
											);
										})}
									</SubMenu>
								);
							}

							return (
								<MenuItem
									key={route.name}
									icon={route.icon}
									className={
										activeLink === route.path &&
										"activeClass"
									}
									onClick={() => {
										setActiveMenuLink("");
										setActiveLink(route.path);
										setActiveSubMenuLink("");
									}}
								>
									{route.name}
									{location.pathname == route.path &&
										setActiveLink(route.path)}
									{location.pathname == route.path &&
										setActiveMenuLink("") &&
										setActiveSubMenuLink("")}

									<Link to={route.path} />
								</MenuItem>
							);
						})}
					</Menu>
				</SidebarContent>
			</ProSidebar>
		</>
	);
};

export default Sidebar;
