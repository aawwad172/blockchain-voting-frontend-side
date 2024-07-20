import React from "react";
import TableRadio from "@components/Dashboard/Table/TableRadio";
import CandidateNameColumn from "@components/User/CandidateNameColumn";

interface UserTableRowProps {
	candidateId: string;
	candidateName: string;
	onChange?: (candidateId: string, checked: boolean) => void;
	checked: boolean;
}

const UserTableRow: React.FC<UserTableRowProps> = ({
	candidateId,
	candidateName,
	onChange = () => {}, // Provide a default no-op function
	checked,
}) => {
	return (
		<tr>
			<TableRadio
				checked={checked}
				onChange={(checked: boolean) => {
					console.log(
						`TableRadio has Checked: ${checked} and it's id is: ${candidateId}`
					);
					onChange(candidateId, checked);
				}}
				name="electionCandidates"
			/>
			<CandidateNameColumn candidateName={candidateName} />
		</tr>
	);
};

export default UserTableRow;
