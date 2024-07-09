import { useAuth } from "@contexts/AuthContext";
import AuthLayout from "@layouts/AuthLayout";
import AdminDashboardLayout from "@layouts/AdminDashboardLayout";
import SuperAdminDashboardLayout from "@layouts/SuperAdminDashboardLayout";
import backgroundImage from "../../userAssets/img/curved-images/curved5.jpg";
import waves from "../../userAssets/img/wave-1.svg";

const ContactUs = () => {
	const { isLoggedIn, userRole } = useAuth();
	const renderContent = () => {
		return (
			<section className="py-lg-7">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="card overflow-hidden mb-5">
								<div className="row">
									<div className="col-lg-7">
										<form
											className="p-3"
											id="contact-form"
											method="post">
											<div className="card-header px-4 py-sm-5 py-3">
												<h2>Say Hi!</h2>
												<p className="lead"> We'd like to talk with you.</p>
											</div>
											<div className="card-body pt-1">
												<div className="row">
													<div className="col-md-12 pe-2 mb-3">
														<label>My name is</label>
														<input
															className="form-control"
															placeholder="Full Name"
															type="text"
														/>
													</div>
													<div className="col-md-12 pe-2 mb-3">
														<label>I'm looking for</label>
														<input
															className="form-control"
															placeholder="What you love"
															type="text"
														/>
													</div>
													<div className="col-md-12 pe-2 mb-3">
														<div className="form-group mb-0">
															<label>Your message</label>
															<textarea
																className="form-control"
																id="message"
																name="message"
																placeholder="I want to say that..."
																rows={6}
															/>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6 text-end ms-auto">
														<button
															className="btn btn-round bg-gradient-info mb-0"
															type="submit">
															Send Message
														</button>
													</div>
												</div>
											</div>
										</form>
									</div>
									<div
										className="col-lg-5 position-relative bg-cover px-0"
										style={{
											backgroundImage: `url(${backgroundImage})`,
										}}>
										<div className="position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none">
											<img
												alt="vertical-wave"
												className="h-100 ms-n2"
												src={waves}
											/>
										</div>
										<div className="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
											<div className="mask bg-gradient-info opacity-9" />
											<div className="p-5 ps-sm-8 position-relative text-start my-auto z-index-2">
												<h3 className="text-white">Contact Information</h3>
												<p className="text-white opacity-8 mb-4">
													Fill up the form and our Team will get back to you
													within 24 hours.
												</p>
												<div className="d-flex p-2 text-white">
													<div>
														<i className="fas fa-phone text-sm" />
													</div>
													<div className="ps-3">
														<span className="text-sm opacity-8">
															(+962) 65359949
														</span>
													</div>
												</div>
												<div className="d-flex p-2 text-white">
													<div>
														<i className="fas fa-envelope text-sm" />
													</div>
													<div className="ps-3">
														<span className="text-sm opacity-8">
															info@psut.edu.jo
														</span>
													</div>
												</div>
												<div className="d-flex p-2 text-white">
													<div>
														<i className="fas fa-map-marker-alt text-sm" />
													</div>
													<div className="ps-3">
														<span className="text-sm opacity-8">
															Khalil Saket Street Al-Jubeiha 11941 P.O. Box 1438
															Amman, Jordan
														</span>
													</div>
												</div>
												<div className="mt-4">
													<button
														className="btn btn-icon-only btn-link text-white btn-lg mb-0"
														data-original-title="Log in with Facebook"
														data-placement="bottom"
														data-toggle="tooltip"
														type="button">
														<i className="fab fa-facebook" />
													</button>
													<button
														className="btn btn-icon-only btn-link text-white btn-lg mb-0"
														data-original-title="Log in with Twitter"
														data-placement="bottom"
														data-toggle="tooltip"
														type="button">
														<i className="fab fa-twitter" />
													</button>
													<button
														className="btn btn-icon-only btn-link text-white btn-lg mb-0"
														data-original-title="Log in with Dribbble"
														data-placement="bottom"
														data-toggle="tooltip"
														type="button">
														<i className="fab fa-dribbble" />
													</button>
													<button
														className="btn btn-icon-only btn-link text-white btn-lg mb-0"
														data-original-title="Log in with Instagram"
														data-placement="bottom"
														data-toggle="tooltip"
														type="button">
														<i className="fab fa-instagram" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	if (!isLoggedIn) {
		<AuthLayout>{renderContent()}</AuthLayout>;
	}

	switch (userRole) {
		case "admin":
			return <AdminDashboardLayout>{renderContent()}</AdminDashboardLayout>;
		case "superAdmin":
			return (
				<SuperAdminDashboardLayout>{renderContent()}</SuperAdminDashboardLayout>
			);
		case "authUser":
			return <AuthLayout>{renderContent()}</AuthLayout>;
		default:
			// This should never happen, but just in case:
			return <AuthLayout>{renderContent()}</AuthLayout>;
	}
};

export default ContactUs;
