import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchElections } from '@utils/api';  // Ensure the path matches your project structure
import LoadingScreen from '@components/User/LoadingScreen'; // Assuming you have a loading component
import DashboardLayout from '@layouts/DashboardLayout';
import TableCard from '@components/Dashboard/Table/TableCard';
import TableHeader from '@components/Dashboard/Table/TableHeader';
import TableRow from '@components/Dashboard/Table/TableRow';
import Divider from '@components/User/Divider';
import BarChart from '@components/Dashboard/Charts/BarChart';


interface Candidate {
    id: string;
    name: string;
    votes: number;
}


interface Election {
    id: string;
    title: string;
    date: string;
    numberOfCandidates: number;
    totalVotes: number;
    candidates: Candidate[];
}

const ElectionDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [election, setElection] = useState<Election | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Function to load static data
    const loadStaticData = () => {
        const staticData: Election = {
            id: '1',
            title: 'Election',
            date: '2023 - 2024',
            numberOfCandidates: 5,
            totalVotes: 1000,
            candidates: [
                { id: '1', name: 'Candidate 1', votes: 200 },
                { id: '2', name: 'Candidate 2', votes: 300 },
                { id: '3', name: 'Candidate 3', votes: 150 },
                { id: '4', name: 'Candidate 4', votes: 250 },
                { id: '5', name: 'Candidate 5', votes: 100 }
            ]
        };
        setElection(staticData);
    };

    useEffect(() => {
        setIsLoading(true);

        // ? Remove the static data function when you finish the development
        // Comment or uncomment the next line to toggle static data
        loadStaticData();
        setIsLoading(false); // Uncomment this too when using static data

        // Dynamic data fetching
        // fetchElections()
        //     .then(elections => {
        //         const foundElection = elections.find(election => election.id.toString() === id);
        //         if (foundElection) {
        //             setElection(foundElection);
        //         } else {
        //             setError('Election not found');
        //         }
        //         setIsLoading(false);
        //     })
        //     .catch(err => {
        //         setError('Failed to fetch election details' + err);
        //         setIsLoading(false);
        //     });
    }, [id]);


    if (isLoading) {
        return (
            <DashboardLayout>
                <LoadingScreen />
            </DashboardLayout>
        );
    }

    if (error) {
        // TODO: Create a View for the Errors
        return <div>{error}</div>;
    }

    if (!election) {
        // TODO: Create a view for ElectionNotFound
        return <div>Election not found.</div>;
    }

    return (
        <DashboardLayout>
            <TableCard headerTitle={`${election.title}  ${election.date}`}>
                <TableHeader columns={["Candidates", "Total Votes"]} isCentered={true} />
                <tbody>
                    <tr>
                        <td className='text-xl font-weight-bold mb-0 text-center'>{election.numberOfCandidates}</td>
                        <td className='text-xl font-weight-bold mb-0 text-center'>{election.totalVotes}</td>
                    </tr>
                </tbody>
            </TableCard>
            <div className="row">
                <div className="col-12">
                    <BarChart
                        data={[
                            { label: "Ahmad", value: 450 },
                            { label: "Yaman", value: 220 },
                            { label: "Ali", value: 300 }
                        ]}
                    />

                </div>
            </div>

        </DashboardLayout>
    );
};

export default ElectionDetails;
