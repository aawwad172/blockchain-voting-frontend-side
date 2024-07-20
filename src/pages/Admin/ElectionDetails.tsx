import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "@components/shared/LoadingScreen"; // Assuming you have a loading component
import AdminDashboardLayout from "@layouts/AdminDashboardLayout";
import TableCard from "@components/Dashboard/Table/TableCard";
import TableHeader from "@components/Dashboard/Table/TableHeader";
import BarChart from "@components/Dashboard/Charts/BarChart";
import { Candidate, Election } from "@hooks/types";
import { useFetchElectionDetails } from "@hooks/useFetchElectionDetails";
import { calculateYear } from "@utils/shared/helpers";
import { useFetchCandidates } from "@hooks/useFetchCandidates";

const ElectionDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [election, setElection] = useState<Election | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [candidates, setCandidates] = useState<Candidate[]>([]);

	// TODO: Fix the useStaticData to false, because every time it's rendering the static data.
	useFetchElectionDetails({
		id: Number(id),
		setElection,
		setLoading,
		setError,
		useStaticData: false,
	});

	useFetchCandidates({
		electionId: Number(id),
		setLoading,
		setError,
		setCandidates,
		useStaticData: false,
	});

	if (loading) {
		return (
			<AdminDashboardLayout>
				<LoadingScreen />
			</AdminDashboardLayout>
		);
	}

	if (error) {
		// TODO: Create a View for the Errors
		return (
			<AdminDashboardLayout>
				<div>Error: {error.message}</div>
			</AdminDashboardLayout>
		);
	}

	if (!election) {
		// TODO: Create a view for ElectionNotFound
		return (
			<AdminDashboardLayout>
				<h2>Election Not Found</h2>
			</AdminDashboardLayout>
		);
	}

	const barChartData = candidates.map((candidate) => ({
		label: candidate.name,
		value: candidate.votes,
	}));

	return (
		<AdminDashboardLayout>
			<TableCard
				headerTitle={`${election.title}  ${calculateYear(
					election.startDate,
					election.endDate
				)}`}>
				<TableHeader
					columns={["Candidates", "Total Votes"]}
					isCentered={true}
				/>
				<tbody>
					<tr>
						<td className="text-xl font-weight-bold mb-0 text-center">
							{election.numberOfCandidates}
						</td>
						<td className="text-xl font-weight-bold mb-0 text-center">
							{election.totalVotes}
						</td>
					</tr>
				</tbody>
			</TableCard>
			<div className="row">
				<div className="col-12">
					<BarChart data={barChartData} />
				</div>
			</div>
		</AdminDashboardLayout>
	);
};

export default ElectionDetails;
