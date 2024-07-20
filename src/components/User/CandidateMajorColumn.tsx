import React from "react";

interface CandidateMajorColumnProps {
	major: string;
}

const CandidateMajorColumn: React.FC<CandidateMajorColumnProps> = ({
	major,
}) => {
	return (
		<td>
			<p className="text-xs font-weight-bold mb-0 text-center">{major}</p>
		</td>
	);
};

export default CandidateMajorColumn;
