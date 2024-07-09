import React from "react";
import EmailColumn from "./EmailColumn";
import TableCheckbox from "@components/Dashboard/Table/TableCheckbox";
import CompanyNameColumn from "./CompanyNameColumn";
import SuperAdminActionColumn from "./SuperAdminActionColumn";
import AdminNameColumn from "./AdminNameColumn";
interface SuperAdminTableRowProps {
	adminId: number;
	adminName: string;
	email: string;
	companyName: string;
	onCheckboxChange?: (adminId: number, checked: boolean) => void;
	checked?: boolean;
}

const SuperAdminTableRow: React.FC<SuperAdminTableRowProps> = ({
	adminId,
	adminName,
	companyName,
	email,
	onCheckboxChange,
	checked,
}) => {
	return (
		<tr>
			{onCheckboxChange && (
				<TableCheckbox
					checked={checked}
					onChange={(checked) => {
						console.log(
							`TableCheckBox has Checked: ${checked} and it's id is: ${adminId}`
						);
						onCheckboxChange(adminId, checked);
					}}
				/>
			)}
			<AdminNameColumn adminName={adminName} />
			<CompanyNameColumn companyName={companyName} />
			<EmailColumn email={email} />
			<SuperAdminActionColumn adminId={adminId} />
		</tr>
	);
};

export default SuperAdminTableRow;
