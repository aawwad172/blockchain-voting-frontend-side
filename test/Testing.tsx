import React from "react";
import Footer from "../src/components/Footer";
import SignInPage from "../src/pages/SignInPage";
import DashboardFooter from "../src/components/DashboardFooter";
import DashboardSidebar from "../src/components/Sidebar/DashboardSidebar";
import SignUpPage from "../src/pages/SignUpPage";

// Assuming that the imported components have their prop types defined in their own files

function Testing(): React.ReactElement {
	return (
		<React.StrictMode>
			<SignInPage />
			{/* <SignUpPage /> */}
			{/* <DashboardFooter /> */}
			{/* <DashboardSidebar /> */}
		</React.StrictMode>
	);
}

export default Testing;
