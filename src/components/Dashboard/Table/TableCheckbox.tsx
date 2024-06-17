import React from "react";

interface TableCheckboxProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
}

const TableCheckbox: React.FC<TableCheckboxProps> = ({ checked, onChange }) => {
	return (
		<td className="text-center align-middle">
			<div className="form-check form-check-info text-center d-flex justify-content-center align-items-center">
				<input
					className="form-check-input"
					type="checkbox"
					checked={checked}
					onChange={(e) => {
						console.log(`TableCheckBox has Checked: ${e.target.checked}`);
						onChange(e.target.checked);
					}}
					id="flexCheckDefault"
				/>
			</div>
		</td>
	);
};

export default TableCheckbox;
