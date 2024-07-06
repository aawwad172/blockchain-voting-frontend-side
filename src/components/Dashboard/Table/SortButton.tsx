import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

interface SortButtonProps {
	sortOrder: "asc" | "desc";
	onSort: (criteria: string) => void;
	criteria: { key: string; label: string }[];
}

const SortButton: React.FC<SortButtonProps> = ({
	sortOrder,
	onSort,
	criteria,
}) => {
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
				{criteria.map((criterion) => (
					<li key={criterion.key}>
						<a
							className="dropdown-item"
							href="javascript:;"
							onClick={() => {
								console.log(`Sort by ${criterion.key} clicked`);
								onSort(criterion.key);
							}}>
							{criterion.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SortButton;
