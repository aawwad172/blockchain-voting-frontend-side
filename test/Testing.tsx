import React from "react";
import Footer from "@components/User/Footer";
import SignInPage from "@pages/Shared/SignInPage";
import DashboardFooter from "@components/Dashboard/DashboardFooter";
import DashboardSidebar from "@components/Dashboard/Sidebar/DashboardSidebar";
import SignUpPage from "@pages/Shared/SignUpPage";
import Navbar from "@components/User/Navbar";
import DashboardNavbar from "@components/Dashboard/DashboardNavbar";
import DashboardLayout from "@layouts/AdminDashboardLayout";
import Dashboard from "@pages/Admin/Dashboard";
import AdminDashboardLayout from "@layouts/AdminDashboardLayout";
import Card from "@components/Dashboard/Card";
import ElectionDetails from "@pages/Admin/ElectionDetails";
import LeadingScreen from "@components/shared/LoadingScreen";
import ElectionsPage from "@pages/Admin/ElectionsPage";
import ProfileCard from "@components/AboutUs/ProfileCard";
import TeamMembers from "@components/AboutUs/TeamMembers";
import AuthLayout from "@layouts/AuthLayout";
import SuperAdminDashboardLayout from "@layouts/SuperAdminDashboardLayout";

const Testing: React.FC = () => {
	return (
		<>
			<AuthLayout>
				<h1>Hello World</h1>
			</AuthLayout>
		</>
	);
};

export default Testing;
