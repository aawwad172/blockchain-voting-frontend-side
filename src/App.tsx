import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Testing from "../test/Testing";

function App() {
	return (
		<Router>
			{/* <Testing /> This will always be rendered regardless of the path */}
			<Routes>
				{/* <Route path="/" element={<HomePage />} /> */}
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
		</Router>
	);
}

export default App;
