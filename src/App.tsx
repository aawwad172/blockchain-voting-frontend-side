import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@assets/css/soft-ui-dashboard.css";
import "@assets/css/nucleo-icons.css";
import "@assets/css/nucleo-svg.css";

import Testing from "@test/Testing";
import SignInPage from "@pages/Shared/SignInPage";
import SignUpPage from "@pages/Shared/SignUpPage";
import Dashboard from "@pages/Admin/Dashboard";
import ElectionDetails from "@pages/Admin/ElectionDetails";
import ElectionsPage from "@pages/Admin/ElectionsPage";
import AboutUsPage from "@pages/Shared/AboutUsPage";
import ProfilePage from "@pages/Admin/AdminProfilePage";
import SuperAdminProfilePage from "@pages/SuperAdmin/SuperAdminProfilePage";
import SuperAdminDashboard from "@pages/SuperAdmin/SuperAdminDashboard";
import AdminsPage from "@pages/SuperAdmin/AdminsPage";
import AdminProfilePage from "@pages/SuperAdmin/AdminDetails";
import HomePage from "@pages/User/HomePage";
import { useAuth } from "@contexts/AuthContext";
import ContactUs from "@pages/Shared/ContactUs";
import UserElectionsPage from "@pages/User/UserElectionsPage";
import CandidatesPage from "@pages/User/CandidatesPage";

function App() {
	const { isLoggedIn, userRole } = useAuth();
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/home"
					element={isLoggedIn ? <HomePage /> : <SignInPage />}
				/>
				<Route
					path="/signin"
					element={<SignInPage />}
				/>
				<Route
					path="/signup"
					element={<SignUpPage />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/election/:id"
					element={<ElectionDetails />}
				/>
				<Route
					path="elections"
					element={<ElectionsPage />}
				/>
				<Route
					path="/userAuth/elections"
					element={<UserElectionsPage />}
				/>

				<Route
					path="/admins-page"
					element={<AdminsPage />}
				/>
				<Route
					path="/admin-profile/:adminId"
					element={<AdminProfilePage />}
				/>
				<Route
					path="/authUser/election/:id"
					element={<CandidatesPage />}
				/>
				<Route
					path="/about-us"
					element={<AboutUsPage />}
				/>
				<Route
					path="/contact-us"
					element={<ContactUs />}
				/>
				<Route
					path="/profile"
					element={<ProfilePage />}
				/>
				<Route
					path="/super-admin-profile/:adminId"
					element={<SuperAdminProfilePage />}
				/>
				<Route
					path="/super-admin-dashboard"
					element={<SuperAdminDashboard />}
				/>
				<Route
					path="/testing"
					element={<Testing />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
