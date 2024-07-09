// components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/img/logos/logo.jpg";

const Navbar: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login state

	return (
		<>
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
				<div className="container-fluid">
					<Link
						to={"/Home"}
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
										to={"/logout"}
										className="nav-link"
										onClick={() => {
											// Implement logout functionality here
											setIsLoggedIn(false);
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
