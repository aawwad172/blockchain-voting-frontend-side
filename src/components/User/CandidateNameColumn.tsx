import React from "react";

interface CandidateNameColumnProps {
	candidateName: string;
}

const CandidateNameColumn: React.FC<CandidateNameColumnProps> = ({
	candidateName,
}) => {
	return (
		<td>
			<div className="d-flex px-2 py-1 justify-content-center">
				<div className="d-flex flex-column">
					<h6 className="mb-0 text-sm text-center">{candidateName}</h6>
				</div>
			</div>
		</td>
	);
};

export default CandidateNameColumn;
