import React from 'react';
import { useParams } from 'react-router-dom';

const ElectionDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // ! The elections page doesn't render in the when clicking on it
    return (
        <div>
            <h1>Election Details</h1>
            <p>Election ID: {id}</p>
            {/* Fetch and display data based on election ID */}
        </div>
    );
};

export default ElectionDetails;
