// components/Footer.tsx
import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const Footer: React.FC = () => {
	useEffect(() => {
		const win = navigator.platform.indexOf("Win") > -1;
		const scrollbarContainer = document.querySelector(
			"#sidenav-scrollbar"
		) as HTMLElement;

		if (win && scrollbarContainer) {
			const options = {
				damping: 0.5,
			};
			Scrollbar.init(scrollbarContainer, options);
		}
	}, []);

	return (
		<footer className="footer py-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 mb-4 mx-auto text-center">
						<a
							href="javascript:;"
							target="_blank"
							className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
							About Us
						</a>
						<a
							href="javascript:;"
							target="_blank"
							className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
							Team
						</a>
					</div>
					<div className="col-lg-8 mx-auto text-center mb-4 mt-2">
						<a
							href="javascript:;"
							target="_blank"
							className="text-secondary me-xl-4 me-4">
							<span className="text-lg fab fa-twitter"></span>
						</a>
						<a
							href="javascript:;"
							target="_blank"
							className="text-secondary me-xl-4 me-4">
							<span className="text-lg fab fa-instagram"></span>
						</a>
						<a
							href="javascript:;"
							target="_blank"
							className="text-secondary me-xl-4 me-4">
							<span className="text-lg fab fa-github"></span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
