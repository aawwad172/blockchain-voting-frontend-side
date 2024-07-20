import React from "react";

interface TableRadioProps {
	checked?: boolean;
	onChange: (checked: boolean) => void;
	name: string;
}

const TableRadio: React.FC<TableRadioProps> = ({ checked, onChange, name }) => {
	return (
		<td className="text-center align-middle">
			<div className="form-check form-check-info text-center d-flex justify-content-center align-items-center">
				<input
					className="form-check-input"
					type="radio"
					checked={checked}
					onChange={(e) => {
						console.log(`TableRadio has Checked: ${e.target.checked}`);
						onChange(e.target.checked);
					}}
					name={name}
					id="flexRadioDefault"
				/>
			</div>
		</td>
	);
};

export default TableRadio;
