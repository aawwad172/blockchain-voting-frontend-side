import DashboardLayout from "@layouts/DashboardLayout";
import ProfileCard from "@components/AboutUs/ProfileCard";
import ConfirmationModal from "@components/Dashboard/Modals/ConfirmationModal"; // Ensure the path is correct
import React, { useState, useEffect } from "react";

interface UserProfile {
	firstName: string;
	lastName: string;
	profilePic: string;
	role?: string;
	description?: string;
	linkedinUrl?: string;
	githubUrl?: string;
	emailURL?: string;
}

const ProfilePage: React.FC = () => {
	const [editMode, setEditMode] = useState(false);
	const [user, setUser] = useState<UserProfile | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Fetch user data when the component mounts
		const fetchUserData = async () => {
			try {
				const response = await fetch("/api/user"); // Replace with your API endpoint
				if (!response.ok) {
					throw new Error("Failed to fetch user data");
				}
				const userData: UserProfile = await response.json();
				setUser(userData);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		fetchUserData();
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser((prevState) =>
			prevState ? { ...prevState, [name]: value } : null
		);
	};

	const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setUser((prevState) =>
				prevState
					? { ...prevState, profilePic: URL.createObjectURL(e.target.files[0]) }
					: null
			);
		}
	};

	const handleCancel = () => {
		setShowModal(false);
		setEditMode(false);
	};

	const handleSave = () => {
		// Show the modal instead of immediately setting edit mode to false
		setShowModal(true);
	};

	const handleConfirmSave = async () => {
		// Post changes to the database
		try {
			await postChangesToDatabase(user);
			setShowModal(false);
			setEditMode(false);
		} catch (error) {
			console.error("Failed to save changes:", error);
			// Handle error (e.g., show an error message to the user)
		}
	};

	const postChangesToDatabase = async (updatedUser: UserProfile | null) => {
		if (!updatedUser) return;
		// Simulate an API call to save changes to the database
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log("Changes saved to the database:", updatedUser);
				resolve(true);
			}, 1000);
		});
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<DashboardLayout>
			<div className="container-fluid">
				{user && !editMode && (
					<ProfileCard
						name={`${user.firstName} ${user.lastName}`}
						role={user.role}
						description={user.description}
						photo={user.profilePic}
						linkedinUrl={user.linkedinUrl}
						githubUrl={user.githubUrl}
						emailURL={user.emailURL}
					/>
				)}
				{user && editMode && (
					<form>
						<div className="mb-3">
							<label
								htmlFor="firstName"
								className="form-label">
								First Name
							</label>
							<input
								type="text"
								className="form-control"
								id="firstName"
								name="firstName"
								value={user.firstName}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="lastName"
								className="form-label">
								Last Name
							</label>
							<input
								type="text"
								className="form-control"
								id="lastName"
								name="lastName"
								value={user.lastName}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="profilePic"
								className="form-label">
								Profile Picture
							</label>
							<input
								type="file"
								className="form-control"
								id="profilePic"
								onChange={handleProfilePicChange}
							/>
							<div className="mt-3">
								<img
									src={user.profilePic}
									alt="Profile"
									className="img-thumbnail"
									style={{ width: "150px" }}
								/>
							</div>
						</div>
						<button
							type="button"
							className="btn btn-primary"
							onClick={handleSave}>
							Save Changes
						</button>
						<button
							type="button"
							className="btn btn-secondary ms-2"
							onClick={() => setEditMode(false)}>
							Cancel
						</button>
					</form>
				)}
				{user && !editMode && (
					<button
						className="btn btn-primary mt-3"
						onClick={() => setEditMode(true)}>
						Edit Profile
					</button>
				)}
				<ConfirmationModal
					show={showModal}
					title="Confirm Changes"
					message="Are you sure you want to save these changes?"
					onConfirm={handleConfirmSave}
					onCancel={() => setShowModal(false)}
				/>
			</div>
		</DashboardLayout>
	);
};

export default ProfilePage;
