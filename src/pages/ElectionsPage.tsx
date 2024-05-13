import React, { useState, useEffect } from "react";
import TableHeader from "@components/Dashboard/Table/TableHeader";
import TableCard from "@components/Dashboard/Table/TableCard";
import StatusBadge from "@components/Dashboard/Table/StatusBandge";
import { Link } from "react-router-dom";
import DashboardLayout from "@layouts/DashboardLayout";
import TableRow from "@components/Dashboard/Table/TableRow";

interface Election {
    id: number;
    title: string;
    year: string;
    status: string;
}


const ElectionsPage: React.FC = () => {
    const [elections, setElections] = useState<Election[]>([]);

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchElections = async () => {
            try {
                const response = await fetch('https://api.yourdomain.com/elections');
                const data = await response.json();
                setElections(data);
            } catch (error) {
                console.error('Failed to fetch elections:', error);
            }
        };

        fetchElections();
    }, []);

    return (
        <DashboardLayout>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <TableCard headerTitle="Elections">
                            <TableHeader columns={["Title", "Year", "Status", ""]} />
                            <tbody>
                                <TableRow key={1} electionId={1} title="Election 1" year="2021" status="pending" />
                                {elections.map(election => (
                                    <TableRow key={election.id} electionId={election.id} title={election.title} status={election.status} year={election.year} />
                                ))}
                            </tbody>
                        </TableCard>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default ElectionsPage;
