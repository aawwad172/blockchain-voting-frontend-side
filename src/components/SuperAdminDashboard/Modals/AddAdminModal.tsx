import React, { useState } from "react";

interface AddAdminModalProps {
	show: boolean;
	onClose: () => void;
	onAddAdmin: (election: {
		name: string;
		companyName: string;
		email: string;
	}) => void;
}

const AddElectionModal: React.FC<AddAdminModalProps> = ({
	show,
	onClose,
	onAddAdmin,
}) => {
	const [name, setName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onAddAdmin({ name, companyName, email });

		// Clear the form fields
		setName("");
		setCompanyName("");
		setEmail("");

		onClose();
	};

	return (
		<div>
			<div
				className={`modal fade${show ? " show d-block" : ""}`}
				id="modal-form"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="modal-form"
				aria-hidden={!show}>
				<div
					className="modal-dialog modal-dialog-centered modal-md"
					role="document">
					<div className="modal-content">
						<div className="modal-body p-0">
							<div className="card card-plain">
								<div className="card-header pb-0 text-left">
									<h3 className="font-weight-bolder text-info text-gradient">
										Add New Admin
									</h3>
								</div>
								<div className="card-body">
									<form
										role="form text-left"
										onSubmit={handleSubmit}>
										<label htmlFor="name">Name</label>
										<div className="input-group mb-3">
											<input
												type="text"
												className="form-control"
												id="name"
												placeholder="name"
												aria-label="name"
												value={name}
												onChange={(e) => setName(e.target.value)}
												required
											/>
										</div>
										<label htmlFor="companyName">Company Name</label>
										<div className="input-group mb-3">
											<input
												type="text"
												className="form-control"
												id="companyName"
												placeholder="Company Name"
												aria-label="Company Name"
												value={companyName}
												onChange={(e) => setCompanyName(e.target.value)}
												required
											/>
										</div>
										<label htmlFor="email">Email</label>
										<div className="input-group mb-3">
											<input
												type="email"
												className="form-control"
												id="email"
												placeholder="email"
												aria-label="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</div>
										<div className="text-center">
											<button
												type="submit"
												className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
												Add Email
											</button>
										</div>
									</form>
								</div>
								<div className="card-footer text-center pt-0 px-lg-2 px-1">
									<button
										type="button"
										className="btn btn-link ml-auto"
										data-bs-dismiss="modal"
										onClick={onClose}>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{show && <div className="modal-backdrop fade show"></div>}
		</div>
	);
};

export default AddElectionModal;
