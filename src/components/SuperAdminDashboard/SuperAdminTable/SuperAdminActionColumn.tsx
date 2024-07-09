import React from "react";
import { Link } from "react-router-dom";

interface SuperAdminActionColumnProps {
	adminId: number; // Assuming electionId is of type number, adjust if it's a string
}

const SuperAdminActionColumn: React.FC<SuperAdminActionColumnProps> = ({
	adminId,
}) => {
	return (
		<td className="d-flex align-items-center justify-content-center">
			<Link
				to={`/admin-profile/${adminId}`}
				className="text-secondary font-weight-bold text-xs"
				data-toggle="tooltip"
				data-original-title="Edit user">
				<p className="text-center">View Profile</p>
			</Link>
		</td>
	);
};

export default SuperAdminActionColumn;
