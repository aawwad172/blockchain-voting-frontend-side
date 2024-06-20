import React from "react";
import { Button } from "../../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

interface FilterButtonProps {
	onFilter: (status: "all" | "pending" | "active" | "done") => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onFilter }) => {
	return (
		<div className="dropdown me-2">
			<Button variant="outline">Hello</Button>
			<div
				className="d-flex justify-content-center align-items-center text-primary"
				id="dropdownFilterButton"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				onClick={() => console.log("Filter dropdown button clicked")}
				style={{ cursor: "pointer" }}>
				<FontAwesomeIcon icon={faFilter} />
			</div>
			<ul
				className="dropdown-menu"
				aria-labelledby="dropdownFilterButton">
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Filter by all clicked");
							onFilter("all");
						}}>
						All
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Filter by pending clicked");
							onFilter("pending");
						}}>
						Pending
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Filter by active clicked");
							onFilter("active");
						}}>
						Active
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Filter by done clicked");
							onFilter("done");
						}}>
						Done
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FilterButton;
