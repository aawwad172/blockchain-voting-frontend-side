import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SuperAdminDashboardLayout from "@layouts/SuperAdminDashboardLayout";
import { Admin } from "@hooks/types";
import { updateAdminDetails } from "@services/userServices";
import LoadingScreen from "@components/shared/LoadingScreen";
import ErrorScreen from "@components/shared/ErrorScreen";
import { useFetchAdminById } from "@hooks/useFetchAdminById";

const AdminProfilePage: React.FC = () => {
	const { adminId } = useParams<{ adminId: string }>();
	const [admin, setAdmin] = useState<Admin | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);
	const [editMode, setEditMode] = useState<boolean>(false);

	useFetchAdminById({
		adminId: adminId,
		setAdmin,
		setLoading,
		setError,
		useStaticData: true,
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setAdmin((prevAdmin) =>
			prevAdmin ? { ...prevAdmin, [name]: value } : null
		);
	};

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (admin) {
			try {
				await updateAdminDetails(admin);
				setEditMode(false);
			} catch (error) {
				setError(error as Error);
			}
		}
	};

	if (loading) {
		return (
			<SuperAdminDashboardLayout>
				<LoadingScreen />
			</SuperAdminDashboardLayout>
		);
	}

	if (error) {
		return (
			<SuperAdminDashboardLayout>
				<ErrorScreen errorMessage={error.message} />
			</SuperAdminDashboardLayout>
		);
	}

	return (
		<SuperAdminDashboardLayout>
			<div className="container py-4">
				{admin && (
					<div className="card">
						<div className="card-header">
							<h3>Admin Profile</h3>
						</div>
						<div className="card-body">
							<form onSubmit={handleFormSubmit}>
								<div className="form-group">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										className="form-control"
										id="name"
										name="name"
										value={admin.name}
										onChange={handleInputChange}
										disabled={!editMode}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="companyName">Company Name</label>
									<input
										type="text"
										className="form-control"
										id="companyName"
										name="companyName"
										value={admin.companyName}
										onChange={handleInputChange}
										disabled={!editMode}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="email"
										value={admin.email}
										onChange={handleInputChange}
										disabled={!editMode}
									/>
								</div>
								<div className="d-flex justify-content-end mt-3">
									{editMode && (
										<button
											type="submit"
											className="btn btn-success me-2">
											Save Changes
										</button>
									)}
									<button
										type="button"
										className={`btn ${
											editMode ? "btn-secondary" : "btn-primary"
										}`}
										onClick={() => setEditMode(!editMode)}>
										{editMode ? "Cancel" : "Edit"}
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</SuperAdminDashboardLayout>
	);
};

export default AdminProfilePage;
