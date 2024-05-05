import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/soft-ui-dashboard.css";
import backgroundImage from "../assets/img/curved-images/curved14.jpg";
import logo from "../assets/img/logos/logo.jpg";

const SignUpPage: React.FC = () => {
	return (
		<>
			<main className="main-content mt-0">
				<section className="min-vh-100 mb-8">
					<div
						className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
						style={{
							backgroundImage: `url(${backgroundImage})`,
						}}>
						<span className="mask bg-gradient-dark opacity-6" />
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-5 text-center mx-auto">
									<h1 className="text-white mb-2 mt-5">Welcome!</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row mt-lg-n10 mt-md-n11 mt-n10">
							<div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
								<div className="card z-index-0">
									<div className="card-header text-center pt-4">
										<h5>Registration</h5>
									</div>
									<div className="row px-xl-5 px-sm-4 px-3">
										<div className="col ms-auto px-1">
											<img
												src={logo}
												alt="Logo of the company"
												style={{ maxWidth: "100%" }}
											/>
										</div>
									</div>
									<div className="card-body">
										<form role="form text-left">
											<div className="mb-3">
												<input
													type="text"
													className="form-control"
													placeholder="Name"
													aria-label="Name"
													aria-describedby="email-addon"
												/>
											</div>
											<div className="mb-3">
												<input
													type="email"
													className="form-control"
													placeholder="Email"
													aria-label="Email"
													aria-describedby="email-addon"
												/>
											</div>
											<div className="mb-3">
												<input
													type="password"
													className="form-control"
													placeholder="Password"
													aria-label="Password"
													aria-describedby="password-addon"
												/>
											</div>
											<div className="form-check form-check-info text-left">
												<input
													className="form-check-input"
													type="checkbox"
													defaultValue=""
													id="flexCheckDefault"
												/>
												<label
													className="form-check-label"
													htmlFor="flexCheckDefault">
													I agree to the
													<a href="#" className="text-dark font-weight-bolder">
														Terms and Conditions
													</a>
												</label>
											</div>
											<div className="text-center">
												<button
													type="button"
													className="btn bg-gradient-dark w-100 my-4 mb-2">
													Sign up
												</button>
											</div>
											<p className="text-sm mt-3 mb-0">
												Already have an account?
												<Link
													to={"/signin"}
													// TODO: Add the Sign In route here
													className="text-dark font-weight-bolder">
													Sign in
												</Link>
											</p>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default SignUpPage;
