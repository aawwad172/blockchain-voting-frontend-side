// pages/AboutUsPage.tsx
import React from "react";
import TeamMembers from "@components/AboutUs/TeamMembers";
import { AdminDashboardLayout, AuthLayout } from "@layouts/index";
import { useAuth } from "@contexts/AuthContext";
import SuperAdminDashboardLayout from "@layouts/SuperAdminDashboardLayout";

const AboutUsPage: React.FC = () => {
	const { isLoggedIn, userRole } = useAuth();

	const profiles = [
		{
			name: "Ahmad Awwad",
			role: "Computer Science Student",
			photo: "../src/assets/img/people/ahmad-awwad.jpg",
			githubUrl: "https://github.com/aawwad172",
			linkedinUrl: "https://www.linkedin.com/in/ahmad-awwad-07bab0227/",
			emailURL: "aawwad172@gmail.com",
		},
		{
			name: "Yaman Khader",
			role: "Computer Science Student",
			photo: "../src/assets/img/people/yaman_khader.jpg",
			githubUrl: "https://github.com/Yaman-Khader",
			linkedinUrl: "https://www.linkedin.com/in/yaman-sameer-859582252/",
			emailURL: "yam20200535@std.psut.edu.jo",
		},
		{
			name: "Reem Alkarmi",
			role: "Computer Science Student",
			photo: "../src/assets/img/people/reem-alkarmi.jpg",
			githubUrl: "https://github.com/Reemkarmi",
			linkedinUrl: "https://www.linkedin.com/in/reem-alkarmi-5a099824b/",
			emailURL: "ree20201106@std.psut.edu.jo",
		},
	];

	const renderContent = () => <TeamMembers profiles={profiles} />;

	if (!isLoggedIn) {
		return <AuthLayout>{renderContent()}</AuthLayout>;
	}

	switch (userRole) {
		case "admin":
			return <AdminDashboardLayout>{renderContent()}</AdminDashboardLayout>;
		case "superAdmin":
			return (
				<SuperAdminDashboardLayout>{renderContent()}</SuperAdminDashboardLayout>
			);
		case "authUser":
			return <AuthLayout>{renderContent()}</AuthLayout>;
		default:
			// This should never happen, but just in case:
			return <AuthLayout>{renderContent()}</AuthLayout>;
	}
};

export default AboutUsPage;
