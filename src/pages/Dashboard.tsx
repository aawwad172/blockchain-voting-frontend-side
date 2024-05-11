import React, { useEffect, useState } from 'react';
import Card from '@components/Dashboard/Card';
import DashboardLayout from '@layouts/DashboardLayout';
import LoadingScreen from '@components/User/LoadingScreen';
import Divider from '@components/User/Divider';

interface CardData {
    id: number;
    title: string;
    date: string;
    daysForElection: string;
}

const fetchElectionsFromDB = async (): Promise<CardData[]> => {
    try {
        const response = await fetch("https://api.example.com/elections");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error: unknown) {
        console.error("Error fetching elections:", (error as Error).message);
        throw error; // Re-throw the error to be handled in useEffect
    }
};

function chunk(arr: CardData[], size: number): CardData[][] {
    const chunkedArr: CardData[][] = [];
    let i = 0;
    while (i < arr.length) {
        chunkedArr.push(arr.slice(i, i + size));
        i += size;
    }
    return chunkedArr;
}

const Dashboard: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [elections, setElections] = useState<CardData[][]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetchElectionsFromDB()
            .then((data) => {
                // Process data into chunks for layout
                const chunkedData = chunk(data, 4); // You can adjust the chunk size as needed
                setElections(chunkedData);
                setIsLoading(false);
            })
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    setError(error);
                } else {
                    setError(new Error('Failed to fetch elections'));
                }
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <DashboardLayout>
                <LoadingScreen />
            </DashboardLayout>
        );
    }

    if (error) {
        return (
            <DashboardLayout>
                <div>Error: {error.message}</div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="container-fluid">
                {elections.map((row, index) => (
                    <div key={index} className="row">
                        {row.map((item, idx) => (
                            <Card key={idx} id={item.id} title={item.title} date={item.date} daysForElection={item.daysForElection} />
                        ))}
                    </div>
                ))}
                <Divider />
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
