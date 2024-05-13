import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchElections } from '@utils/api';  // Ensure the path matches your project structure
import LoadingScreen from '@components/User/LoadingScreen'; // Assuming you have a loading component
import DashboardLayout from '@layouts/DashboardLayout';
import TableCard from '@components/Dashboard/Table/TableCard';
import TableRow from '@components/Dashboard/Table/TableRow';
import TableHeader from '@components/Dashboard/Table/TableHeader';

interface Election {
    id: string;
    title: string;
    date: string;
    numberOfCandidates: number;
    totalVotes: number;
}

const ElectionDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [election, setElection] = useState<Election | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        fetchElections()
            .then(elections => {
                // Convert id to number if necessary, or modify your fetchElections to fetch a single election based on ID
                const foundElection = elections.find(election => election.id.toString() === id);
                if (foundElection) {
                    setElection(foundElection);
                } else {
                    setError('Election not found');
                }
                setIsLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch election details' + err);
                setIsLoading(false);
            });
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
            <TableCard headerTitle={`Election Number ${id}`}>
                <TableHeader columns={["Candidates", "Total Votes"]} />
                <tbody>
                    <td className='text-xs font-weight-bold mb-0 text-center'>{election.numberOfCandidates}</td>
                    <td className='text-xs font-weight-bold mb-0 text-center'>{election.totalVotes}</td>
                </tbody>
            </TableCard>
        </DashboardLayout>
    );
};

export default ElectionDetails;
