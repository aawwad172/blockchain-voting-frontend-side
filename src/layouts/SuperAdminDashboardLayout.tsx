import React from "react";
import DashboardNavbar from "@components/Dashboard/DashboardNavbar";
import DashboardFooter from "@components/Dashboard/DashboardFooter";
import SuperAdminDashboardSidebar from "@components/Dashboard/Sidebar/SuperAdminDashboardSidebar";

type SuperAdminDashboardLayoutProps = {
	children: React.ReactNode;
};

const SuperAdminDashboardLayout: React.FC<SuperAdminDashboardLayoutProps> = ({
	children,
}) => {
	return (
		<div className="g-sidenav-show d-flex flex-column min-vh-100">
			<SuperAdminDashboardSidebar />
			<main className="main-content position-relative flex-grow-1 d-flex flex-column h-100 border-radius-lg">
				<DashboardNavbar />
				<div className="container-fluid py-4 flex-grow-1">{children}</div>
				<DashboardFooter />
			</main>
		</div>
	);
};

export default SuperAdminDashboardLayout;
