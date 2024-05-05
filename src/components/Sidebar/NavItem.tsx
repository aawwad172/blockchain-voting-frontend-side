import React from "react";

interface NavItemProps {
	href: string;
	iconComponent: JSX.Element;
	title: string;
	isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
	href,
	iconComponent,
	title,
	isActive = false,
}) => {
	const activeClass = isActive ? "active" : "";
	return (
		<li className={`nav-item ${activeClass}`}>
			<a className="nav-link" href={href}>
				<div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
					{iconComponent}
				</div>
				<span className="nav-link-text ms-1">{title}</span>
			</a>
		</li>
	);
};

export default NavItem;
