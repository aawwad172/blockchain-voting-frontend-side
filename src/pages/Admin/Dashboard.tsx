import React, { useEffect, useState } from 'react';
import Card from '@components/Dashboard/Card';
import AdminDashboardLayout from "@layouts/AdminDashboardLayout";
import LoadingScreen from "@components/shared/LoadingScreen";
import Divider from "@components/User/Divider";

interface Elections {
	id: number;
	title: string;
	date: string;
	daysForElection: string;
}

function chunk(arr: Elections[], size: number): Elections[][] {
	const chunkedArr: Elections[][] = [];
	let i = 0;
	while (i < arr.length) {
		chunkedArr.push(arr.slice(i, i + size));
		i += size;
	}
	return chunkedArr;
}

// Hardcoded data for testing
const hardcodedData: Elections[][] = chunk(
	[
		{ id: 1, title: "Election 1", date: "2022 - 2023", daysForElection: "5" },
		{ id: 2, title: "Election 2", date: "2021 - 2022", daysForElection: "30" },
		{ id: 3, title: "Election 3", date: "2020 - 2021", daysForElection: "55" },
		{ id: 4, title: "Election 4", date: "2018 - 2019", daysForElection: "80" },
	],
	2
);

const Dashboard: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false); // Initially set to false since we are using hardcoded data
	const [elections, setElections] = useState<Elections[][]>(hardcodedData);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		// Uncomment below for real API fetching
		// setIsLoading(true);
		// fetchElections()
		//     .then(data => {
		//         setElections(data);
		//         setIsLoading(false);
		//     })
		//     .catch(err => {
		//         setError(err);
		//         setIsLoading(false);
		//     });
	}, []);

	if (isLoading) {
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

	return (
		<AdminDashboardLayout>
			<div className="container-fluid">
				{elections.map((row, index) => (
					<div
						key={index}
						className="row">
						{row.map((item, idx) => (
							<Card
								key={idx}
								id={item.id}
								title={item.title}
								date={item.date}
								daysForElection={item.daysForElection}
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
