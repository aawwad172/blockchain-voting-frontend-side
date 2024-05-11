import React from 'react';
import { ring2 } from 'ldrs';

// Register the custom element if not already done in another part of your application
ring2.register();

const LoadingScreen = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)' // Light black background
    };

    return (
        <div style={containerStyle}>
            <l-ring-2
                size="40"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8"
                color="black"
            ></l-ring-2>
        </div>
    );
};

export default LoadingScreen;
