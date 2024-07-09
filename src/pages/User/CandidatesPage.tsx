import TableCard from "@components/Dashboard/Table/TableCard";
import TableHeader from "@components/Dashboard/Table/TableHeader";
// import ErrorScreen from "@components/shared/ErrorScreen";
import LoadingScreen from "@components/shared/LoadingScreen";
import UserTableRow from "@components/User/UserTableRow";
import { Candidate } from "@hooks/types";
import AuthLayout from "@layouts/AuthLayout";
import { useEffect, useState } from "react";

// Mock data for candidates
const mockCandidates: Candidate[] = [
	{ id: "1", name: "Candidate 1", major: "Computer Science", votes: 0 },
	{ id: "2", name: "Candidate 2", major: "Electrical Engineering", votes: 0 },
	{ id: "3", name: "Candidate 3", major: "Mechanical Engineering", votes: 0 },
];

const CandidatesPage = () => {
	const [candidates, setCandidates] = useState<Candidate[]>([]);
	const [loading, setLoading] = useState(true);
	// const [error, setError] = useState<Error | null>(null);
	const [radioButtonChecked, setRadioButtonChecked] = useState<string | null>(
		null
	);

	useEffect(() => {
		// Simulate fetching data
		setLoading(true);
		setCandidates(mockCandidates);
		setLoading(false);
	}, []);

	const handleRadioButtonChange = (candidateId: string, checked: boolean) => {
		if (checked) {
			setRadioButtonChecked(candidateId);
		}
	};

	if (loading) {
		return <LoadingScreen />;
	}

	// if (error) {
	// 	return <ErrorScreen errorMessage={error?.message} />;
	// }

	return (
		<AuthLayout>
			<div className="container-fluid py-1">
				<TableCard headerTitle="Candidates">
					<TableHeader
						columns={["Select", "Name", "Major"]}
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
								candidateMajor={candidate.major}
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
						disabled={radioButtonChecked === null}>
						Vote
					</button>
				</div>
			</div>
		</AuthLayout>
	);
};

export default CandidatesPage;
