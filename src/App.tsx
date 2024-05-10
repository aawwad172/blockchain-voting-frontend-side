import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testing from "@test/Testing";
import SignInPage from "@pages/SignInPage";
import SignUpPage from "@pages/SignUpPage";

// This is the main component of the app. It will render the testing component and the sign in page.

function App() {
	return (
		<Router>
			{/* <Testing /> This will always be rendered regardless of the path */}
			<Routes>
				<Route path="/" element={<Testing/>} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
		</Router>
	);
}

export default App;
