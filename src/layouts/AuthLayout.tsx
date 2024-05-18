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

			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default AuthLayout;
