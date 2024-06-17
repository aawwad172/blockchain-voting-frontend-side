import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

interface TableCardProps {
	headerTitle: string;
	children: React.ReactNode;
	onAddNew?: () => void;
	onDeleteSelected?: () => void;
	isDeleteDisabled?: boolean;
	sortButton?: React.ReactNode; // Made optional
	filterButton?: React.ReactNode; // Made optional
}

const TableCard: React.FC<TableCardProps> = ({
	headerTitle,
	children,
	onAddNew,
	onDeleteSelected,
	isDeleteDisabled = true,
	sortButton,
	filterButton,
}) => {
	return (
		<div className="card mb-3">
			<div className="card-header pb-0">
				<div className="row">
					<h6 className="col-4">{headerTitle}</h6>
					<div className="col-8 d-flex justify-content-end align-items-center">
						{onDeleteSelected && (
							<div
								className={`d-flex justify-content-center align-items-center mx-2 mb-3 ${
									isDeleteDisabled
										? "text-danger-50"
										: "text-gradient text-primary"
								}`}
								style={{
									cursor: isDeleteDisabled ? "not-allowed" : "pointer",
								}}
								onClick={isDeleteDisabled ? undefined : onDeleteSelected}
								{...(!isDeleteDisabled && {
									"data-bs-toggle": "modal",
									"data-bs-target": "#modal-default",
								})}>
								<FontAwesomeIcon icon={faTrash} />
							</div>
						)}
						{/* Fix: Fix the filter button and the Sort button, because they are not working after 
							fixing the delete button */}
						{filterButton && (
							<div className="d-flex justify-content-center align-items-center mx-2 mb-3">
								{filterButton}
							</div>
						)}
						{sortButton && (
							<div className="d-flex justify-content-center align-items-center mx-2 mb-3">
								{sortButton}
							</div>
						)}
						{onAddNew && (
							<div className="d-flex justify-content-center align-items-center mx-2">
								<button
									className="btn btn-xs bg-gradient-primary d-flex justify-content-center align-items-center"
									onClick={onAddNew}
									style={{ cursor: "pointer" }}>
									<FontAwesomeIcon icon={faPlus} />
									<span className="mx-1">New</span>
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="card-body px-0 pt-0 pb-2">
				<div className="table-responsive p-0">
					<table className="table align-items-center mb-0">{children}</table>
				</div>
			</div>
		</div>
	);
};

export default TableCard;
