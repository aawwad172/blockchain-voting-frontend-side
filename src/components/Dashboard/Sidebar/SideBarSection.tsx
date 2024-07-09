import React from "react";

type SideBarSectionProps = {
	title: string;
};

const SideBarSection: React.FC<SideBarSectionProps> = ({ title }) => {
	return (
		<li className="nav-item mt-3">
			<h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
				{title}
			</h6>
		</li>
	);
};
export default SideBarSection;
