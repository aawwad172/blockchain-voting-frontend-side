import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuPortal,
} from "@radix-ui/react-dropdown-menu";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

interface FilterButtonProps {
	onFilter: (status: "all" | "pending" | "active" | "done") => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onFilter }) => {
	const [filter, setFilter] = useState("all");
	const [position, setPosition] = React.useState("Top");

	const handleFilterChange = (value: string) => {
		setFilter(value);
		onFilter(value as "all" | "pending" | "active" | "done");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FontAwesomeIcon
					icon={faFilter}
					className="text-gradient text-primary"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuPortal>
				<DropdownMenuContent className="w-100 mt-2">
					<DropdownMenuLabel>Filter By</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup
						value={position}
						onValueChange={handleFilterChange}>
						<DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="pending">
							Pending
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="active">Active</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="done">Done</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenuPortal>
		</DropdownMenu>
	);
};

export default FilterButton;
