import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface FilterOption {
	label: string;
	value: string;
}

interface FilterButtonProps {
	options: FilterOption[];
	onFilter: (value: string) => void;
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

const FilterButton: React.FC<FilterButtonProps> = ({ options, onFilter }) => {
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

	const handleFilter = (value: string) => {
		onFilter(value);
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
				id="dropdownFilterButton"
				onClick={() => console.log("Filter dropdown button clicked")}
				style={{ cursor: "pointer" }}>
				<FontAwesomeIcon icon={faFilter} />
			</summary>
			<DropdownMenu aria-labelledby="dropdownFilterButton">
				{options.map((option) => (
					<DropdownItem
						key={option.value}
						onClick={() => handleFilter(option.value)}>
						{option.label}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
};

export default FilterButton;
