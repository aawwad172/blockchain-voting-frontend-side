// components/PageLayout.tsx
import React from "react";
import Navbar from "../components/";
import Footer from "./Footer";

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
