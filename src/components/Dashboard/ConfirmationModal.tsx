import React, { useEffect } from "react";

interface ConfirmationModalProps {
	show: boolean;
	title: string;
	message: string;
	onConfirm: () => void;
	onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
	show,
	title,
	message,
	onConfirm,
	onCancel,
}) => {
	useEffect(() => {
		const modalElement = document.getElementById("modal-default");
		if (modalElement) {
			const modal = new bootstrap.Modal(modalElement);
			if (show) {
				modal.show();
			} else {
				modal.hide();
			}
		}
	}, [show]);

	return (
		<div>
			<div
				className="modal fade"
				id="modal-default"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="modal-default"
				aria-hidden="true">
				<div
					className="modal-dialog modal-dialog-centered"
					role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h6
								className="modal-title"
								id="modal-title-default">
								{title}
							</h6>
							<button
								type="button"
								className="btn-close text-dark"
								data-bs-dismiss="modal"
								aria-label="Close"
								onClick={onCancel}>
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">
							<p>{message}</p>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn bg-gradient-primary"
								onClick={onConfirm}>
								Confirm
							</button>
							<button
								type="button"
								className="btn btn-link ml-auto"
								data-bs-dismiss="modal"
								onClick={onCancel}>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
