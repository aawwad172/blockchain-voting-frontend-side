import React from 'react';
import Card from '@components/Dashboard/Card'
import DashboardLayout from '@layouts/DashboardLayout';

// Define an interface for the individual card data
interface CardData {
    id: number;
    title: string;
    date: string;
    daysForElection: string;
}

// Define an array of card data using the CardData interface
const data: CardData[] = [
    { id: 1, title: "Student Council", date: "2021-2022    ", daysForElection: "10 days left" },
    { id: 2, title: "Student Council", date: "2021-10-10", daysForElection: "10 days left" },
    { id: 3, title: "Student Council", date: "2021-10-10", daysForElection: "10 days left" },
    { id: 4, title: "Student Council", date: "2021-10-10", daysForElection: "10 days left" },

];

// Helper function to chunk the data into groups, annotated with types
function chunk(arr: CardData[], size: number): CardData[][] {
    const chunkedArr: CardData[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
}

const Dashboard: React.FC = () => {
    const rows = chunk(data, 4); // Chunk data into groups of 4

    return (
        <DashboardLayout>
            <div className="container-fluid">
                {rows.map((row, index) => (
                    <div key={index} className="row">
                        {row.map((item, idx) => (
                            <Card key={idx} id={item.id} title={item.title} date={item.date} daysForElection={item.daysForElection} />
                        ))}
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
