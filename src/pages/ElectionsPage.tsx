import React, { useState, useEffect } from "react";
import TableHeader from "@components/Dashboard/Table/TableHeader";
import TableCard from "@components/Dashboard/Table/TableCard";
import StatusBadge from "@components/Dashboard/Table/StatusBadge";
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

    // Function to load static data
    const loadStaticData = () => {
        const staticData: Election[] = [
            { id: 1, title: "Local Elections", year: "2022", status: "active" },
            { id: 2, title: "National Elections", year: "2023", status: "pending" },
            { id: 3, title: "Special Elections", year: "2021", status: "done" }
        ];
        setElections(staticData);
    };

    useEffect(() => {
        // todo: Remove the static data function when you finish the development
        // Comment or uncomment the next line to toggle static data
        loadStaticData();

        // Fetch data from an API (uncomment to use dynamic data fetching)
        const fetchElections = async () => {
            try {
                const response = await fetch('https://api.yourdomain.com/elections');
                const data = await response.json();
                setElections(data);
            } catch (error) {
                console.error('Failed to fetch elections:', error);
            }
        };
        // fetchElections();
    }, []);

    return (
        <DashboardLayout>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <TableCard headerTitle="Elections">
                            <TableHeader columns={["Title", "Year", "Status", ""]} />
                            <tbody>
                                {elections.map(election => (
                                    <TableRow key={election.id} electionId={election.id} title={election.title} year={election.year} status={election.status} />
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
