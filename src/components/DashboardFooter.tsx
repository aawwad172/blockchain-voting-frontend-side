import React from "react";

const DashboardFooter: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer pt-3">
			<div className="container-fluid">
				<div className="row align-items-center justify-content-lg-between">
					<div className="col-lg-6 mb-lg-0 mb-4">
						<div className="copyright text-center text-sm text-muted text-lg-start">
							© {currentYear}, made with <i className="fa fa-heart"></i> by Our
							Team.
						</div>
					</div>
					<div className="col-lg-6">
						<ul className="nav nav-footer justify-content-center justify-content-lg-end">
							<li className="nav-item">
								<a
									href="https://www.creative-tim.com/presentation"
									className="nav-link text-muted"
									target="_blank">
									About Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default DashboardFooter;
