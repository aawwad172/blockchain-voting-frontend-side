import React from "react";

interface TitleColumnProps {
    title: string;
}

const TitleColumn: React.FC<TitleColumnProps> = ({ title }) => {
    return (
			<td>
				<div className="d-flex px-2 py-1">
					<div className="d-flex flex-column">
						<h6 className="mb-0 text-sm">{title}</h6>
					</div>
				</div>
			</td>
		);
}

export default TitleColumn;