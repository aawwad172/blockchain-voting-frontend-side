import React, { useState, useEffect } from "react";
import { useFetchElections } from "@hooks/useFetchElections";
import { Election } from "@hooks/types";
import ErrorMessage from "@components/shared/ErrorScreen";
import LoadingScreen from "@components/shared/LoadingScreen";
import AuthLayout from "@layouts/AuthLayout";
import Card from "@components/Dashboard/Card";
import {
	calculateYear,
	chunkArray,
	electionEndsIn,
} from "@utils/shared/helpers";
import { useAuth } from "@contexts/AuthContext";

const UserElectionsPage: React.FC = () => {
	const { isLoggedIn, userRole } = useAuth();
	const [elections, setElections] = useState<Election[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const [availableElections, setAvailableElections] = useState<Election[]>([]);

	useFetchElections({
		setElections,
		setLoading,
		setError,
		useStaticData: false,
	});

	useEffect(() => {
		const filteredElections = elections
			.filter((election) =>
				election.title.toLowerCase().startsWith(searchTerm.toLowerCase())
			)
			.sort(
				(a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
			);
		setAvailableElections(filteredElections);
	}, [elections, searchTerm]);

	if (loading) {
		return (
			<AuthLayout>
				<LoadingScreen />
			</AuthLayout>
		);
	}

	if (error) {
		return (
			<AuthLayout>
				<ErrorMessage errorMessage={error.message} />
			</AuthLayout>
		);
	}

	const chunkedElections = chunkArray(availableElections, 2);

	return (
		<AuthLayout>
			<div className="container-fluid">
				<div className="row">
					<h1 className="text-center fs-1">Elections</h1>
				</div>
				<div className="row justify-content-center align-items-center">
					<input
						type="text"
						style={{ width: "50%" }}
						className="form-control mb-3"
						placeholder="Search for elections..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<div className="row">
					{chunkedElections.map((row, rowIndex) => (
						<div
							key={rowIndex}
							className="row">
							{row.map((election) => (
								<Card
									key={election.id}
									id={election.id}
									title={election.title}
									date={calculateYear(election.startDate, election.endDate)}
									daysForElection={electionEndsIn(election.endDate)}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</AuthLayout>
	);
};

export default UserElectionsPage;
