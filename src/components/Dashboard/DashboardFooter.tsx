import React from "react";
import { Link } from "react-router-dom";

const DashboardFooter: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer pt-3 pb-3">
			<div className="container-fluid">
				<div className="row align-items-center justify-content-lg-between">
					<div className="col-lg-6 mb-lg-0 mb-4">
						<div className="copyright text-center text-sm text-muted text-lg-start">
							© {currentYear}, made with{" "}
							<i className="fa fa-heart text-gradient text-primary"></i> by Our
							Team.
						</div>
					</div>
					<div className="col-lg-6">
						<ul className="nav nav-footer justify-content-center justify-content-lg-end">
							<li className="nav-item">
								<Link
									to="/about-us"
									className="nav-link text-muted">
									About Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default DashboardFooter;
