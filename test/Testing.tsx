import React from "react";
import Footer from "@components/User/Footer";
import SignInPage from "@pages/SignInPage";
import DashboardFooter from "@components/Dashboard/DashboardFooter";
import DashboardSidebar from "@components/Dashboard/Sidebar/DashboardSidebar";
import SignUpPage from "@pages/SignUpPage";
import Navbar from "@components/User/Navbar";
import DashboardNavbar from "@components/Dashboard/DashboardNavbar";
import DashboardLayout from "@layouts/DashboardLayout";

function Testing(): React.ReactElement {
	return (
		<React.StrictMode>
			{/* <DashboardNavbar /> */}
			{/* <SignInPage /> */}
			{/* <SignUpPage /> */}
			{/* <DashboardFooter /> */}
			{/* <DashboardSidebar /> */}
			<DashboardLayout>
				<h1>Hello</h1>
			</DashboardLayout>
		</React.StrictMode>
	);
}

export default Testing;
