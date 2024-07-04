import React from "react";

interface EmailColumnProps {
	email: string;
}

const EmailColumn: React.FC<EmailColumnProps> = ({ email }) => {
	return (
		<td>
			<p className="text-xs font-weight-bold mb-0 text-center">{email}</p>
		</td>
	);
};

export default EmailColumn;
