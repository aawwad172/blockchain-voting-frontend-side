import React from "react";
import ActionColumn from "./ActionColumn";
import TitleColumn from "./TitleColumn";
import YearColumn from "./YearColumn";
import StatusBadge from "./StatusBadge";
import TableCheckbox from "./TableCheckbox";

interface TableRowProps {
	electionId: number;
	title: string;
	year: string;
	startDate: string;
	endDate: string;
	status: string;
	onCheckboxChange: (electionId: number, checked: boolean) => void;
	checked: boolean;
}

const TableRow: React.FC<TableRowProps> = ({
	electionId,
	title,
	year,
	startDate,
	endDate,
	status,
	onCheckboxChange,
	checked,
}) => {
	return (
		<tr>
			<TableCheckbox
				checked={checked}
				onChange={(checked) => {
					console.log(
						`TableCheckBox has Checked: ${checked} and it's id is: ${electionId}`
					);
					onCheckboxChange(electionId, checked);
				}}
			/>
			<TitleColumn title={title} />
			<YearColumn year={year} />
			<StatusBadge status={status} />
			<ActionColumn electionId={electionId} />
		</tr>
	);
};

export default TableRow;
