import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@assets/js/core/bootstrap.bundle.min.js";
import "@assets/css/soft-ui-dashboard.css";
import { AuthProvider } from "@contexts/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>
);
