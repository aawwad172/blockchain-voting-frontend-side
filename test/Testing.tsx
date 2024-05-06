import React from "react";
import Footer from "../src/components/User/Footer";
import SignInPage from "../src/pages/SignInPage";
import DashboardFooter from "../src/components/Dashboard/DashboardFooter";
import DashboardSidebar from "../src/components/Dashboard/Sidebar/DashboardSidebar";
import SignUpPage from "../src/pages/SignUpPage";
import Navbar from "../src/components/User/Navbar";
import DashboardNavbar from "../src/components/Dashboard/DashboardNavbar";
import DashboardLayout from "../src/layouts/DashboardLayout";

// Assuming that the imported components have their prop types defined in their own files

function Testing(): React.ReactElement {
	return (
		<React.StrictMode>
			{/* <DashboardNavbar/> */}
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
