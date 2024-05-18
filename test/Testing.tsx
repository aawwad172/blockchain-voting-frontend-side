import React from "react";
import Footer from "@components/User/Footer";
import SignInPage from "@pages/SignInPage";
import DashboardFooter from "@components/Dashboard/DashboardFooter";
import DashboardSidebar from "@components/Dashboard/Sidebar/DashboardSidebar";
import SignUpPage from "@pages/SignUpPage";
import Navbar from "@components/User/Navbar";
import DashboardNavbar from "@components/Dashboard/DashboardNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import Dashboard from "@pages/Dashboard";
import DasbhaordLayout from "@layouts/DashboardLayout";
import Card from "@components/Dashboard/Card";
import ElectionDetails from "@pages/ElectionDetails";
import LeadingScreen from "@components/User/LoadingScreen";
import ElectionsPage from "@pages/ElectionsPage";
import ProfileCard from "@components/AboutUs/ProfileCard";
import TeamMembers from "@components/AboutUs/TeamMembers";

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
	// Add more profiles as needed
];

const Testing: React.FC = () => {
	return (
		<>
			{/* <DashboardNavbar /> */}
			{/* <SignInPage /> */}
			{/* <SignUpPage /> */}
			{/* <DashboardFooter /> */}
			{/* <DashboardSidebar /> */}
			<Dashboard />
			{/* <ElectionDetails /> */}
			{/* <LeadingScreen /> */}
			{/* <ElectionsPage /> */}
			{/* <TeamMembers profiles={profiles} /> */}
		</>
	);
};

export default Testing;
