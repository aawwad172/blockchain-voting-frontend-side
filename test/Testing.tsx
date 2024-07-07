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
import FilterButton from "@components/Dashboard/Table/FilterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

// interface FilterButtonProps {
// 	onFilter: (status: "all" | "pending" | "active" | "done") => void;
// }

const Testing: React.FC = () => {
	return (
		<>
			<div className="dropdown">
				<div
					className="d-flex justify-content-center align-items-center text-primary"
					id="dropdownFilterButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					onClick={() => console.log("Filter dropdown button clicked")}
					style={{ cursor: "pointer" }}>
					<FontAwesomeIcon icon={faFilter} />
				</div>
				<ul
					className="dropdown-menu"
					aria-labelledby="dropdownMenuButton">
					<li>
						<a
							className="dropdown-item"
							href="javascript:;">
							Action
						</a>
					</li>
					<li>
						<a
							className="dropdown-item"
							href="javascript:;">
							Another action
						</a>
					</li>
					<li>
						<a
							className="dropdown-item"
							href="javascript:;">
							Something else here
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Testing;
