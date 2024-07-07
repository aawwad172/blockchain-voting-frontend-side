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


function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Testing />}
				/>
				<Route
					path="/home"
					element={<Dashboard />}
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
				{/* <Route
					path="/admin-profile/:id"
					element={}
				/> */}
				<Route
					path="/elections"
					element={<ElectionsPage />}
				/>
				<Route
					path="/admins-page"
					element={<AdminsPage />}
				/>
				<Route
					path="/about-us"
					element={<AboutUsPage inDashboard={true} />}
				/>
				<Route
					path="/profile"
					element={<ProfilePage />}
				/>
				<Route
					path="/super-admin-profile"
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
