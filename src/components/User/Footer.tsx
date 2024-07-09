// components/Footer.tsx
import { Link } from "react-router-dom";
import patternLines from "../../userAssets/img/shapes/pattern-lines.svg";

const Footer: React.FC = () => {
	return (
		<footer className="footer py-5 bg-gradient-dark position-relative overflow-hidden fixed-bottom">
			<img
				src={patternLines}
				alt="pattern-lines"
				className="position-absolute start-0 top-0 w-100 opacity-6"
			/>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
						<h6 className="text-white font-weight-bolder text-uppercase mb-lg-4 mb-3">
							E-Voting System
						</h6>
						<ul className="nav flex-row ms-n3 justify-content-lg-start justify-content-center mb-4 mt-sm-0">
							<li className="nav-item">
								<Link
									to="/home"
									className="nav-link text-white opacity-8"
									target="_blank"
									rel="noopener noreferrer">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/about-us"
									className="nav-link text-white opacity-8"
									target="_blank"
									rel="noopener noreferrer">
									About
								</Link>
							</li>
						</ul>
						<p className="text-sm text-white opacity-8 mb-0">
							Copyright © PSUT Computer Science Graduation Project Team
						</p>
					</div>
					<div className="col-lg-6 ms-auto text-lg-end text-center">
						<p className="mb-5 text-lg text-white font-weight-bold">
							The reward for getting on the stage is fame. The price of fame is
							you can’t get off the stage.
						</p>
						<a
							href="javascript:;"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white opacity-5">
							<span className="fab fa-github" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
