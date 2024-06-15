import React from "react";
import DashboardSidebar from "@components/Dashboard/Sidebar/DashboardSidebar";
import DashboardNavbar from "@components/Dashboard/DashboardNavbar";
import DashboardFooter from "@components/Dashboard/DashboardFooter";

type Props = {
	children: React.ReactNode;
};

const AdminDashboardLayout = ({ children }: Props) => {
	return (
		<div className="g-sidenav-show d-flex flex-column min-vh-100">
			<DashboardSidebar />
			<main className="main-content position-relative flex-grow-1 d-flex flex-column h-100 border-radius-lg">
				<DashboardNavbar />
				<div className="container-fluid py-4 flex-grow-1">{children}</div>
				<DashboardFooter />
			</main>
		</div>
	);
};

export default AdminDashboardLayout;
