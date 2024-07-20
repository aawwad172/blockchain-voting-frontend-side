// components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext"; // Ensure the correct path
import logo from "@assets/img/logos/logo.jpg";

const Navbar: React.FC = () => {
	const { isLoggedIn, logout } = useAuth(); // Use AuthContext

	return (
		<>
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
				<div className="container-fluid">
					<Link
						to={"/home"}
						className="navbar-brand font-weight-bolder"
						rel="tooltip"
						title="Blockchain Voting System"
						data-placement="bottom">
						<img
							src={logo}
							alt="E-Voting System logo"
							height={50}
							width={50}
							className="me-2"
						/>
						E-Voting System
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navigation"
						aria-controls="navigation"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navigation">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item text-primary text-gradient">
								<Link
									to={"/about-us"}
									className="nav-link">
									About Us
								</Link>
							</li>
							<li className="nav-item text-primary text-gradient">
								<Link
									to={"/contact-us"}
									className="nav-link">
									Contact Us
								</Link>
							</li>
							<li className="nav-item text-primary text-gradient">
								{isLoggedIn ? (
									<Link
										to={"/"}
										className="nav-link"
										onClick={() => {
											// Logout functionality
											logout();
										}}>
										Logout
									</Link>
								) : (
									<Link
										to={"/signin"}
										className="nav-link">
										Sign In
									</Link>
								)}
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* End Navbar */}
		</>
	);
};

export default Navbar;
