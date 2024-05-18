import React, { useState, useEffect } from "react";

interface AddElectionModalProps {
	show: boolean;
	onClose: () => void;
	onAddElection: (election: {
		title: string;
		year: string;
		startDate: string;
		endDate: string;
	}) => void;
}

const AddElectionModal: React.FC<AddElectionModalProps> = ({
	show,
	onClose,
	onAddElection,
}) => {
	const [title, setTitle] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [year, setYear] = useState("");

	useEffect(() => {
		if (startDate && endDate) {
			const startYear = new Date(startDate).getFullYear();
			const endYear = new Date(endDate).getFullYear();

			if (startYear === endYear) {
				setYear(startYear.toString());
			} else {
				setYear(`${startYear} - ${endYear}`);
			}
		}
	}, [startDate, endDate]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onAddElection({ title, year, startDate, endDate });
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
										Add New Election
									</h3>
								</div>
								<div className="card-body">
									<form
										role="form text-left"
										onSubmit={handleSubmit}>
										<label htmlFor="title">Title</label>
										<div className="input-group mb-3">
											<input
												type="text"
												className="form-control"
												id="title"
												placeholder="Title"
												aria-label="Title"
												value={title}
												onChange={(e) => setTitle(e.target.value)}
												required
											/>
										</div>
										<label htmlFor="startDate">Start Date</label>
										<div className="input-group mb-3">
											<input
												type="date"
												className="form-control"
												id="startDate"
												placeholder="Start Date"
												aria-label="Start Date"
												value={startDate}
												onChange={(e) => setStartDate(e.target.value)}
												required
											/>
										</div>
										<label htmlFor="endDate">End Date</label>
										<div className="input-group mb-3">
											<input
												type="date"
												className="form-control"
												id="endDate"
												placeholder="End Date"
												aria-label="End Date"
												value={endDate}
												onChange={(e) => setEndDate(e.target.value)}
												required
											/>
										</div>
										<div className="text-center">
											<button
												type="submit"
												className="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0">
												Add Election
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
