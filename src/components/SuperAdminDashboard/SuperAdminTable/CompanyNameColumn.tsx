import React from "react";

interface CompanyNameColumnProps {
	companyName: string;
}

const CompanyNameColumn: React.FC<CompanyNameColumnProps> = ({
	companyName,
}) => {
	return (
		<td>
			<p className="text-xs font-weight-bold mb-0 text-center">{companyName}</p>
		</td>
	);
};

export default CompanyNameColumn;
