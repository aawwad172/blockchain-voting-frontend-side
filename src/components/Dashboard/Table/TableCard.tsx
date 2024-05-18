import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

interface TableCardProps {
	headerTitle: string;
	children: React.ReactNode;
	onAddElection?: () => void;
	onDeleteSelected?: () => void;
	isDeleteDisabled?: boolean;
	sortButton?: React.ReactNode; // Made optional
	filterButton?: React.ReactNode; // Made optional
}

const TableCard: React.FC<TableCardProps> = ({
	headerTitle,
	children,
	onAddElection,
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
								className={`d-flex justify-content-center align-items-center mx-2 ${
									isDeleteDisabled
										? "text-danger-50"
										: "text-gradient text-danger"
								}`}
								style={{
									cursor: isDeleteDisabled ? "not-allowed" : "pointer",
								}}
								onClick={isDeleteDisabled ? undefined : onDeleteSelected}>
								<FontAwesomeIcon icon={faTrash} />
							</div>
						)}

						{filterButton && (
							<div className="d-flex justify-content-center align-items-center mx-2">
								{filterButton}
							</div>
						)}
						{sortButton && (
							<div className="d-flex justify-content-center align-items-center mx-2">
								{sortButton}
							</div>
						)}
						{/* // Fix the alignment of the button so it will be on the same level as other icons! */}
						{onAddElection && (
							<div className="d-flex justify-content-center align-items-center mx-2">
								<button
									className="btn btn-xs bg-gradient-primary d-flex justify-content-center align-items-center"
									onClick={onAddElection}
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
