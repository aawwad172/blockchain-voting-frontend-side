import React, { useEffect, useRef, useState } from "react";
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
	right: 0;
	margin: 0;
	padding: 0;
	border: 1px solid #ccc;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		left: 0; /* Ensure the menu stays within the viewport */
		right: auto; /* Override the default right positioning */
		padding: 0.5rem; /* Adjust the padding for mobile */
	}
`;

const DropdownItem = styled.li`
	padding: 5px 15px 5px 20px;
	cursor: pointer;

	&:hover {
		background-color: #f8f9fa;
	}

	@media (max-width: 768px) {
		padding: 3px 10px; /* Adjust the padding for mobile */
		font-size: 0.875rem; /* Adjust the font size for mobile */
	}
`;

const FilterButton: React.FC<FilterButtonProps> = ({ options, onFilter }) => {
	const dropdownRef = useRef<HTMLDetailsElement>(null);
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
			className={`dropdown ${isMobile ? "mr-2" : "mx-2"}`}
			ref={dropdownRef}>
			<summary
				className="d-flex justify-content-center align-items-center text-primary"
				id="dropdownFilterButton"
				onClick={() => console.log("Filter dropdown button clicked")}
				style={{ cursor: "pointer" }}>
				<FontAwesomeIcon
					icon={faFilter}
					style={{
						fontSize: isMobile ? "16px" : "20px", // Smaller size for mobile
					}}
				/>
				<span className="ms-2">Filter</span>
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
