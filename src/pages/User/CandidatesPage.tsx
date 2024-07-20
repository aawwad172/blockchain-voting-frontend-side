import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TableCard from "@components/Dashboard/Table/TableCard";
import TableHeader from "@components/Dashboard/Table/TableHeader";
import LoadingScreen from "@components/shared/LoadingScreen";
import UserTableRow from "@components/User/UserTableRow";
import AuthLayout from "@layouts/AuthLayout";
import { Candidate } from "@hooks/types";
import { useFetchCandidates } from "@hooks/useFetchCandidates"; // Ensure the correct path
import { useAuth } from "@contexts/AuthContext"; // Import the useAuth hook

const CandidatesPage = () => {
	const { id } = useParams<{ id: string }>(); // Extract electionId from the URL
	const [candidates, setCandidates] = useState<Candidate[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [radioButtonChecked, setRadioButtonChecked] = useState<string | null>(
		null
	);

	const { userEmail } = useAuth();
	console.log(userEmail); // Get the user's email from the AuthContext

	// Ensure electionId is defined and a number
	const electionIdNumber = id ? parseInt(id, 10) : null;

	// Use the custom hook to fetch candidates
	useFetchCandidates({
		electionId: electionIdNumber !== null ? electionIdNumber : 1,
		setCandidates,
		setLoading,
		setError,
		useStaticData: false, // or true if you want to use mock data
	});

	const handleRadioButtonChange = (candidateId: string, checked: boolean) => {
		if (checked) {
			setRadioButtonChecked(candidateId);
		}
	};

	const handleVote = async () => {
		if (radioButtonChecked !== null) {
			try {
				// Step 1: Send a POST request to start_model endpoint
				const modelResponse = await axios.post(
					"http://192.168.81.95:5000/start_model",
					{
						email: userEmail,
					}
				);

				console.log(modelResponse.data.recognized_name);
				// Step 2: Check if the user email matches the response from start_model
				if (modelResponse.data.recognized_name === userEmail) {
					// Step 3: If the email matches, proceed to cast the vote
					const response = await axios.post(
						`http://localhost:3000/election/${id}/vote`,
						{ candidateId: radioButtonChecked }
					);
					console.log("Vote cast successfully:", response.data);
					alert("Vote cast successfully");
				} else {
					alert(
						"User email does not match the response from the model. Vote not cast."
					);
				}
			} catch (error) {
				console.error("Error casting vote:", error);
				alert("Failed to cast vote. Please try again.");
			}
		}
	};

	if (loading) {
		return <LoadingScreen />;
	}

	if (error) {
		return <div>Error: {error.message}</div>; // Optionally handle error state
	}

	return (
		<AuthLayout>
			<div className="container-fluid py-1">
				<h3>Welcome, {userEmail}</h3> {/* Display the user's email */}
				<TableCard headerTitle="Candidates">
					<TableHeader
						columns={["Select", "Name"]}
						radioButtonName="radioCandidateGroup"
						radioButtonChecked={radioButtonChecked !== null}
						onRadioButton={() => {}}
						isCentered={true}
					/>
					<tbody>
						{candidates.map((candidate: Candidate) => (
							<UserTableRow
								key={candidate.id}
								candidateId={candidate.id}
								candidateName={candidate.name}
								onChange={handleRadioButtonChange}
								checked={radioButtonChecked === candidate.id}
							/>
						))}
					</tbody>
				</TableCard>
				<div className="row justify-content-center align-items-center">
					<button
						className={`btn ${
							radioButtonChecked === null
								? "bg-gradient-secondary"
								: "bg-gradient-primary"
						}`}
						style={{ width: "20%" }}
						disabled={radioButtonChecked === null}
						onClick={handleVote}>
						Vote
					</button>
				</div>
			</div>
		</AuthLayout>
	);
};

export default CandidatesPage;
