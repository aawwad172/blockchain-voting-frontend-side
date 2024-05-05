// pages/SignInPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/soft-ui-dashboard.css";
import backgroundImage from "../assets/img/curved-images/curved6.jpg";

// Define TypeScript interface for form state
interface IFormState {
	email: string;
	password: string;
	rememberMe: boolean;
}

const SignInPage: React.FC = () => {
	// Initialize form state using useState hook
	const [formData, setFormData] = useState<IFormState>({
		email: "",
		password: "",
		rememberMe: false,
	});

	// Handle input changes
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked, type } = event.target;

		// If the input is the email, convert it to lowercase
		const updatedValue = name === "email" ? value.toLowerCase() : value;

		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : updatedValue,
		});
	};

	// Handle form submission
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Form Data:", formData);
		// TODO: mplement actual sign-in logic here
	};

	return (
		<>
			<main className="main-content mt-0">
				<section>
					<div className="page-header min-vh-75">
						<div className="container">
							<div className="row">
								<div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
									<div className="card card-plain mt-8">
										<div className="card-header pb-0 text-left bg-transparent">
											<h3 className="font-weight-bolder text-info text-gradient">
												Welcome back
											</h3>
											<p className="mb-0">
												Enter your email and password to sign in
											</p>
										</div>
										<div className="card-body">
											<form role="form" onSubmit={handleSubmit}>
												<label>Email</label>
												<div className="mb-3">
													<input
														type="email"
														className="form-control"
														placeholder="Email"
														aria-label="Email"
														aria-describedby="email-addon"
														name="email"
														value={formData.email}
														onChange={handleChange}
													/>
												</div>
												<label>Password</label>
												<div className="mb-3">
													<input
														type="password"
														className="form-control"
														placeholder="Password"
														aria-label="Password"
														aria-describedby="password-addon"
														name="password"
														value={formData.password}
														onChange={handleChange}
													/>
												</div>
												<div className="form-check form-switch">
													<input
														className="form-check-input"
														type="checkbox"
														id="rememberMe"
														name="rememberMe"
														checked={formData.rememberMe}
														onChange={handleChange}
													/>
													<label
														className="form-check-label"
														htmlFor="rememberMe">
														Remember me
													</label>
												</div>
												<div className="text-center">
													<button
														type="submit"
														className="btn bg-gradient-info w-100 mt-4 mb-0">
														Sign in
													</button>
												</div>
											</form>
										</div>
										<div className="card-footer text-center pt-0 px-lg-2 px-1">
											<p className="mb-4 text-sm mx-auto">
												Don't have an account?
												<Link
													to="/signup"
													className="text-info text-gradient font-weight-bold">
													Sign up
												</Link>
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
										<div
											className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
											style={{
												backgroundImage: `url(${backgroundImage})`,
											}}></div>
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

export default SignInPage;
