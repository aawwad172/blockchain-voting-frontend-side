import React, { useEffect, useState } from "react";
import Card from "@components/Dashboard/Card";
import AdminDashboardLayout from "@layouts/AdminDashboardLayout";
import LoadingScreen from "@components/shared/LoadingScreen";
import Divider from "@components/User/Divider";
import {
	calculateYear,
	chunkArray,
	electionEndsIn,
} from "@utils/shared/helpers";
import { useFetchElections } from "@hooks/useFetchElections";
import { Election } from "@hooks/types";

const Dashboard: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [elections, setElections] = useState<Election[]>([]);
	const [error, setError] = useState<Error | null>(null);

	useFetchElections({
		setElections,
		setLoading,
		setError,
		useStaticData: false,
	});

	// Fix: Fix the sorting of elections by end date
	useEffect(() => {
		setElections((prevElections) =>
			prevElections
				.slice()
				.sort(
					(a, b) =>
						new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
				)
		);
	}, []);

	if (loading) {
		return (
			<AdminDashboardLayout>
				<LoadingScreen />
			</AdminDashboardLayout>
		);
	}

	if (error) {
		return (
			<AdminDashboardLayout>
				<div>Error: {error.message}</div>
			</AdminDashboardLayout>
		);
	}

	const chunkedElections = chunkArray(elections, 2);

	return (
		<AdminDashboardLayout>
			<div className="container-fluid">
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
				<Divider />
			</div>
		</AdminDashboardLayout>
	);
};

export default Dashboard;
