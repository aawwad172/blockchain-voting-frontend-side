import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

interface SortButtonProps {
	sortOrder: "asc" | "desc";
	onSort: (criteria: "title" | "startDate" | "endDate") => void;
}

const SortButton: React.FC<SortButtonProps> = ({ sortOrder, onSort }) => {
	return (
		<div className="dropdown me-2">
			<div
				className="d-flex justify-content-center align-items-center text-primary"
				id="dropdownSortButton"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				onClick={() => console.log("Sort dropdown button clicked")}
				style={{ cursor: "pointer" }}>
				<FontAwesomeIcon icon={faSort} />
				<span className="ms-2">
					{sortOrder === "asc" ? "Ascending" : "Descending"}
				</span>
			</div>
			<ul
				className="dropdown-menu"
				aria-labelledby="dropdownSortButton">
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Sort by title clicked");
							onSort("title");
						}}>
						Alphabetically
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Sort by start date clicked");
							onSort("startDate");
						}}>
						By Start Date
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Sort by end date clicked");
							onSort("endDate");
						}}>
						By End Date
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SortButton;
