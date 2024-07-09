import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@assets/img/logos/logo.jpg";
import HomeIcon from "@components/Icons/HomeIcon";
import SideBarSection from "./SideBarSection";
import ProfileIcon from "@components/Icons/ProfileIcon";
import LogoutIcon from "@components/Icons/LogoutIcon";
import SideItem from "./SideItem";
import AdminIcon from "@components/Icons/AdminIcon";

const SuperAdminDashboardSidebar: React.FC = () => {
	const navigate = useNavigate();
	return (
		<aside
			className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
			id="sidenav-main">
			<div className="sidenav-header">
				<i
					className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
					aria-hidden="true"
					id="iconSidenav"
				/>
				<Link
					to="/super-admin-dashboard"
					className="navbar-brand m-0">
					<img
						src={logo}
						className="navbar-brand-img h-100"
						alt="main_logo"
					/>
					<span className="ms-1 font-weight-bold">Dashboard</span>
				</Link>
			</div>
			<hr className="horizontal dark mt-0" />
			<div
				className="collapse navbar-collapse w-auto"
				id="sidenav-collapse-main">
				<ul className="navbar-nav">
					<SideItem
						title="Dashboard"
						route="/super-admin-dashboard"
						SVG={<HomeIcon />}
					/>
					<SideItem
						title="Admins"
						route="/admins-page"
						SVG={<AdminIcon />}
					/>
					<SideBarSection title="Account pages" />

					<SideItem
						title="Profile"
						route="/super-admin-profile"
						SVG={<ProfileIcon />}
					/>
					<SideItem
						title="logout"
						route="/signin"
						SVG={<LogoutIcon />}
						onClick={() => {
							// Remove the jwtToken from the local storage
							localStorage.removeItem("jwtToken");
							navigate("/signin");
						}}
					/>
				</ul>
			</div>
		</aside>
	);
};
export default SuperAdminDashboardSidebar;
