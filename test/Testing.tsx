import React from "react";
import Footer from "@components/User/Footer";
import SignInPage from "@pages/SignInPage";
import DashboardFooter from "@components/Dashboard/DashboardFooter";
import DashboardSidebar from "@components/Dashboard/Sidebar/DashboardSidebar";
import SignUpPage from "@pages/SignUpPage";
import Navbar from "@components/User/Navbar";
import DashboardNavbar from "@components/Dashboard/DashboardNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import Dashboard from "@pages/Admin/Dashboard";
import DasbhaordLayout from "@layouts/DashboardLayout";
import Card from "@components/Dashboard/Card";
import ElectionDetails from "@pages/Admin/ElectionDetails";
import LeadingScreen from "@components/User/LoadingScreen";
import ElectionsPage from "@pages/Admin/ElectionsPage";
import ProfileCard from "@components/AboutUs/ProfileCard";
import TeamMembers from "@components/AboutUs/TeamMembers";
import AuthLayout from "@layouts/AuthLayout";

const Testing: React.FC = () => {
	return (
		<>
			<AuthLayout>
				<h2>hello world</h2>
			</AuthLayout>
		</>
	);
};

export default Testing;
