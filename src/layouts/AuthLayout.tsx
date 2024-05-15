// components/PageLayout.tsx
import React from "react";
import Navbar from "@components/User/Navbar";
import Footer from "@components/User/Footer";

type Props = {
	children: React.ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
	return (
		<>

			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default PageLayout;
