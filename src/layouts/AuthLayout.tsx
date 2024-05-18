// components/AuthLayout.tsx
import React from "react";
import Navbar from "@components/User/Navbar";
import Footer from "@components/User/Footer";

type Props = {
	children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<div className="g-sidenav-show d-flex flex-column min-vh-100">
				<Navbar />
				<main className="main-content position-relative flex-grow-1 d-flex flex-column h-100 border-radius-lg mt-5 pt-3">
					<div className="container-fluid py-4 flex-grow-1">{children}</div>
					<Footer />
				</main>
			</div>
		</>
	);
};

export default AuthLayout;
