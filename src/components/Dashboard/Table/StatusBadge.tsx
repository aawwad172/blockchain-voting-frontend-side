import React from "react";

interface StatusBadgeProps {
	status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
	// Define the type for the statusClasses object
	const statusClasses: { [key: string]: string } = {
		active: "bg-gradient-info",
		done: "bg-gradient-success",
		pending: "bg-gradient-warning",
	};

	// Get the corresponding class for the current status or default to a general one
	const badgeClass =
		statusClasses[status.toLowerCase()] || "bg-gradient-secondary";

	return (
		<td className="align-middle text-center text-sm">
			<span className={`badge badge-sm ${badgeClass}`}>{status}</span>
		</td>
	);
};

export default StatusBadge;
