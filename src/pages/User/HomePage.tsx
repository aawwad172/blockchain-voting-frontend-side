import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@layouts/AuthLayout";
import { useFetchElections } from "@hooks/useFetchElections";
import Card from "@components/Dashboard/Card";
import { Election } from "@hooks/types";
import ErrorMessage from "@components/shared/ErrorScreen";
import { calculateYear, electionEndsIn } from "@utils/shared/helpers";
import LoadingScreen from "@components/shared/LoadingScreen";
import { useAuth } from "@contexts/AuthContext"; // Import the useAuth hook

const HomePage: React.FC = () => {
	const [elections, setElections] = useState<Election[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [availableElections, setAvailableElections] = useState<Election[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const { isLoggedIn } = useAuth(); // Get the login state

	useFetchElections({
		setElections,
		setLoading,
		setError,
		useStaticData: false,
	});

	useEffect(() => {
		const filteredElections = elections
			.filter(
				(election) =>
					new Date() < new Date(election.endDate) &&
					new Date() > new Date(election.startDate) &&
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

	return (
		<AuthLayout>
			{/* Hero Section */}
			<section className="hero text-center py-5">
				<div className="container">
					<h1 className="display-4">Welcome to the E-Voting Platform</h1>
					<p className="lead">
						Participate in and manage multiple elections easily.
					</p>
					<div className="cta-buttons">
						<Link
							className="btn bg-gradient-primary btn-lg mx-2"
							to={
								isLoggedIn
									? "/userAuth/elections"
									: "/signin?redirect=/userAuth/elections"
							}>
							View Elections
						</Link>
						<Link
							className="btn btn-secondary btn-lg mx-2"
							to={isLoggedIn ? "/dashboard" : "/signin?redirect=/dashboard"}>
							Create Election
						</Link>
					</div>
				</div>
			</section>

			{/* Elections Overview Section */}
			<section className="elections-overview py-5">
				<div className="container">
					<h2 className="mb-4">Available Elections</h2>
					<input
						type="text"
						className="form-control mb-3"
						placeholder="Search for elections..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<div className="row">
						{availableElections.map((election: Election) => (
							<Card
								key={election.id}
								id={election.id}
								title={election.title}
								date={calculateYear(election.startDate, election.endDate)}
								daysForElection={electionEndsIn(election.endDate)}
							/>
						))}
					</div>
				</div>
			</section>
		</AuthLayout>
	);
};

export default HomePage;
