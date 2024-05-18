import React from "react";
import TableCheckbox from "./TableCheckbox";

interface TableHeaderProps {
	columns: string[];
	isCentered?: boolean;
	onSelectAll?: (checked: boolean) => void;
	selectAllChecked?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({
	columns,
	isCentered = false,
	onSelectAll,
	selectAllChecked = false,
}) => {
	return (
		<thead>
			<tr>
				{onSelectAll && (
					<TableCheckbox
						checked={selectAllChecked}
						onChange={onSelectAll}
					/>
				)}
				{columns.map((column, index) => (
					<th
						key={index}
						className={
							index === 0 && !isCentered
								? "text-left text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
								: "text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
						}>
						{column}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
