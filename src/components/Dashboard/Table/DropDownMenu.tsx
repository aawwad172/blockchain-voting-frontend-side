import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface DropdownMenuProps {
	components: React.ReactNode[];
}

const Dropdown = styled.details`
	position: relative;
	z-index: 1000;
`;

const DropdownMenuList = styled.ul`
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
`;

const DropdownItem = styled.li`
	padding: 5px 15px;
	cursor: pointer;
	display: flex;
	align-items: center;

	&:hover {
		background-color: #f8f9fa;
	}
`;

const DropdownMenu: React.FC<DropdownMenuProps> = ({ components }) => {
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

	return (
		<Dropdown ref={dropdownRef}>
			<summary
				className="d-flex justify-content-center align-items-center text-primary"
				id="dropdownMenuButton"
				style={{ cursor: "pointer" }}>
				<FontAwesomeIcon icon={faEllipsisV} />
			</summary>
			<DropdownMenuList aria-labelledby="dropdownMenuButton">
				{components.map((component, index) => (
					<DropdownItem key={index}>{component}</DropdownItem>
				))}
			</DropdownMenuList>
		</Dropdown>
	);
};

export default DropdownMenu;
