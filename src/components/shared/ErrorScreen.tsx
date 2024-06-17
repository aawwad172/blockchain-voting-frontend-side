import React from "react";

type ErrorScreenProps = {
	errorMessage: string;
};
const ErrorScreen = ({ errorMessage }: ErrorScreenProps) => {
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}>
			<h1 className="text-danger">
				{errorMessage || "An error occurred. Please try again later."}
			</h1>
		</div>
	);
};
export default ErrorScreen;
