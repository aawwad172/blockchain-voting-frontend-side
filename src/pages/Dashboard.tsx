import React, { useEffect, useState } from 'react';
import Card from '@components/Dashboard/Card';
import DashboardLayout from '@layouts/DashboardLayout';
import LoadingScreen from '@components/User/LoadingScreen';
import Divider from '@components/User/Divider';
import { fetchElections } from '@utils/api';

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

const Dashboard: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [elections, setElections] = useState<Elections[][]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        fetchElections()
            .then(data => {
                setElections(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
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


    // TODO: Fetch data from an API and update the data array using blockchain data
    //! Change the selection criteria for the elections because this is the dashboard and not all elections should be shown
    // TODO: Use the chunk function to split the data into rows of 2
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
