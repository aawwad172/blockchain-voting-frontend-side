import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "@components/Dashboard/Table/DropDownMenu"; // Import the new DropdownMenu component

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
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	const handleResize = () => {
		setIsMobile(window.innerWidth < 768);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="card mb-3">
			<div className="card-header pb-0">
				<div className="row">
					<h6
						className="col-lg-4 col-6 "
						style={isMobile ? { fontSize: "18px" } : {}}>
						{headerTitle}
					</h6>
					<div className="col-lg-8 col-6 d-flex justify-content-end align-items-center">
						{isMobile ? (
							<div
								className="mb-3 mx-2"
								style={{ fontSize: "16px" }}>
								<DropdownMenu
									components={[
										sortButton,
										filterButton,
										<div
											key="delete"
											className={`d-flex justify-content-center align-items-center ${
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
											<span className="ms-2">Delete</span>
										</div>,
									]}
								/>
							</div>
						) : (
							<>
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
							</>
						)}
						{onAddNew && (
							<div className="d-flex justify-content-center align-items-center mx-2">
								<button
									className="btn bg-gradient-primary d-flex justify-content-center align-items-center"
									onClick={onAddNew}
									style={{
										cursor: "pointer",
										padding: "0.5rem 1rem",
									}}>
									<FontAwesomeIcon icon={faPlus} />
									<span className="mx-1 d-none d-md-inline">New</span>
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
