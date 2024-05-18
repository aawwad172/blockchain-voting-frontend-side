import React from "react";
import TeamMembers from "@components/AboutUs/TeamMembers";
import { DashboardLayout, AuthLayout } from "@layouts/index";

interface AboutUsPageProps {
	inDashboard: boolean;
}

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

const AboutUsPage: React.FC<AboutUsPageProps> = ({ inDashboard = true }) => {
	return (
		<>
			{inDashboard ? (
				<DashboardLayout>
					<TeamMembers profiles={profiles} />
				</DashboardLayout>
			) : (
				<AuthLayout>
					<TeamMembers profiles={profiles} />
				</AuthLayout>
			)}
		</>
	);
};

export default AboutUsPage;
