import React from "react";

interface AdminNameColumnProps {
	adminName: string;
}

const AdminNameColumn: React.FC<AdminNameColumnProps> = ({ adminName }) => {
	return (
		<td>
			<div className="d-flex px-2 py-1 justify-content-center">
				<div className="d-flex flex-column">
					<h6 className="mb-0 text-sm text-center">{adminName}</h6>
				</div>
			</div>
		</td>
	);
};

export default AdminNameColumn;
