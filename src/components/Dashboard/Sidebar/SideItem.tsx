import React from "react";
import { Link, useLocation } from "react-router-dom";

type SideItemProps = {
	title: string;
	SVG: React.ReactNode;
	route: string;
	onClick?: () => void;
};

const SideItem: React.FC<SideItemProps> = ({ title, SVG, route, onClick }) => {
	const location = useLocation();

	return (
		<li
			className="nav-item"
			onClick={onClick}>
			<Link
				to={route}
				className={`nav-link ${location.pathname === route ? "active" : ""}`}>
				<div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
					{SVG}
				</div>
				<span className="nav-link-text ms-1">{title}</span>
			</Link>
		</li>
	);
};

export default SideItem;
