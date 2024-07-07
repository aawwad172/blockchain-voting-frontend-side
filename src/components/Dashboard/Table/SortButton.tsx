import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface SortCriteria {
	key: string;
	label: string;
}

interface SortButtonProps {
	sortOrder: "asc" | "desc";
	onSort: (criteria: string) => void;
	criteria: SortCriteria[];
}

const Dropdown = styled.details`
	position: relative;
	z-index: 1000;
`;

const DropdownMenu = styled.ul`
	position: absolute;
	list-style: none;
	width: max-content;
	border-radius: 10px;
	background-color: white;
	right: 100%;
	margin: 0;
	padding: 0;
`;

const DropdownItem = styled.li`
	padding: 5px 15px 5px 20px;
	cursor: pointer;

	&:hover {
		background-color: #f8f9fa;
	}
`;

const SortButton: React.FC<SortButtonProps> = ({
	sortOrder,
	onSort,
	criteria,
}) => {
	const dropdownRef = useRef<HTMLDetailsElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				dropdownRef.current.removeAttribute("open");
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleSort = (criteria: string) => {
		onSort(criteria);
		if (dropdownRef.current) {
			dropdownRef.current.removeAttribute("open");
		}
	};

	return (
		<Dropdown
			className="dropdown me-2"
			ref={dropdownRef}>
			<summary
				className="d-flex justify-content-center align-items-center text-primary"
				id="dropdownSortButton"
				onClick={() => console.log("Sort dropdown button clicked")}
				style={{ cursor: "pointer" }}>
				<FontAwesomeIcon icon={faSort} />
				<span className="ms-2">
					{sortOrder === "asc" ? "Ascending" : "Descending"}
				</span>
			</summary>
			<DropdownMenu aria-labelledby="dropdownSortButton">
				{criteria.map((criterion) => (
					<DropdownItem
						key={criterion.key}
						onClick={() => handleSort(criterion.key)}>
						{criterion.label}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
};

export default SortButton;
