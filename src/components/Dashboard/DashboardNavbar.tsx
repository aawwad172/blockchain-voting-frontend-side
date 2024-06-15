import React from 'react';
import { useLocation } from 'react-router-dom';

const DashboardNavbar: React.FC = () => {
  const location = useLocation();

  // Function to convert pathname to a readable page and subpage name
const formatPageName = (pathname: string) => {
	// Split the pathname by '/' and filter out empty strings
	const path = pathname.split("/").filter((item) => item !== "");

	// Helper function to process each segment
	const formatSegment = (segment: string | undefined) => {
		if (!segment) return segment;
		return segment
			.replace(/-/g, " ") // Replace hyphens with spaces
			.split(" ") // Split by spaces to capitalize each word
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
			.join(" "); // Join words back together with spaces
	};

	// Extract and format the main page and subpage
	const page = formatSegment(path[0]);
	const subPage = formatSegment(path[1]);

	// Return an array with the main page and subpage
	return [page, subPage];
};

  const [pageName, subPageName] = formatPageName(location.pathname);

  return (
		<nav
			className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
			id="navbarBlur"
			navbar-scroll="true">
			<div className="container-fluid py-1 px-3">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
						<li className="breadcrumb-item text-sm">Pages</li>
						{pageName && (
							<li
								className="breadcrumb-item text-sm text-dark active "
								aria-current="page">
								{pageName}
							</li>
						)}
					</ol>
					<h6 className="font-weight-bolder mb-0 mt-2 text-gradient text-primary">
						{subPageName || pageName}
					</h6>
				</nav>
			</div>
		</nav>
	);
};

export default DashboardNavbar;
