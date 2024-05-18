import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

interface TableCardProps {
	headerTitle: string;
	children: React.ReactNode;
	onAddElection?: () => void;
	onDeleteSelected?: () => void;
	isDeleteDisabled?: boolean;
	sortButton?: React.ReactNode; // Made optional
	filterButton?: React.ReactNode; // Made optional
}

const renderTooltip = (props: any, text: string) => (
	<Tooltip
		id="button-tooltip"
		{...props}>
		{text}
	</Tooltip>
);

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
						{/* // Fix the delete modal it's not being removed when confirm */}
						{onDeleteSelected && (
							<OverlayTrigger
								placement="top"
								overlay={renderTooltip({}, "Delete Selected")}>
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
							</OverlayTrigger>
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
						{/* // Fix the modal it's not rendered with the animation */}
						{onAddElection && (
							<OverlayTrigger
								placement="top"
								overlay={renderTooltip({}, "Add New")}>
								<div className="d-flex justify-content-center align-items-center mx-2">
									<button
										className="btn btn-xs bg-gradient-primary d-flex justify-content-center align-items-center"
										onClick={onAddElection}
										style={{ cursor: "pointer" }}>
										<FontAwesomeIcon icon={faPlus} />
										<span className="mx-1">New</span>
									</button>
								</div>
							</OverlayTrigger>
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
