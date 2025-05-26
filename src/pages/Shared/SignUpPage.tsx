import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@components/User/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/css/soft-ui-dashboard.css";
import backgroundImage from "@assets/img/curved-images/curved14.jpg";
import logo from "@assets/img/logos/logo.jpg";

const SignUpPage: React.FC = () => {
	const [name, setName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [termsChecked, setTermsChecked] = useState(false);

	const handleSendRequest = (e: React.FormEvent) => {
		console.info(`Logo URL: ${logo}`);
		console.info(`Background Image URL: ${backgroundImage}`);
		e.preventDefault();
		setName("");
		setCompanyName("");
		setEmail("");
		setPassword("");
		setTermsChecked(false);
		setPhoneNumber("");

		alert(
			"Request sent successfully! We will contact you as soon as possible."
		);
	};

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
										<form
											role="form text-left"
											onSubmit={handleSendRequest}>
											<div className="mb-3">
												<input
													type="text"
													className="form-control"
													placeholder="Name"
													aria-label="Name"
													aria-describedby="name-addon"
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
											<div className="mb-3">
												<input
													type="text"
													className="form-control"
													placeholder="Company Name"
													aria-label="Company Name"
													aria-describedby="company-name-addon"
													value={companyName}
													onChange={(e) => setCompanyName(e.target.value)}
												/>
											</div>
											<div className="mb-3">
												<input
													type="email"
													className="form-control"
													placeholder="Email"
													aria-label="Email"
													aria-describedby="email-addon"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											<div className="mb-3">
												<input
													type="password"
													className="form-control"
													placeholder="Password"
													aria-label="Password"
													aria-describedby="password-addon"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
											</div>
											<div className="mb-3">
												<input
													type="tel"
													className="form-control"
													placeholder="Phone Number (e.g., +1234567890)"
													aria-label="Phone Number"
													aria-describedby="phone-number-addon"
													value={phoneNumber}
													onChange={(e) => setPhoneNumber(e.target.value)}
												/>
											</div>
											<div className="form-check form-check-info text-left">
												<input
													className="form-check-input"
													type="checkbox"
													id="termsCheck"
													checked={termsChecked}
													onChange={(e) => setTermsChecked(e.target.checked)}
												/>
												<label
													className="form-check-label"
													htmlFor="termsCheck">
													<span>I agree to the</span>
													<a
														href="#"
														className="text-dark font-weight-bolder">
														<span> Terms and Conditions</span>
													</a>
												</label>
											</div>
											<div className="text-center">
												<button
													type="submit"
													className="btn bg-gradient-dark w-100 my-4 mb-2"
													disabled={!termsChecked}>
													Send Request
												</button>
											</div>
											<p className="text-sm mt-3 mb-0">
												Already have an account?
												<Link
													to="/signin"
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
