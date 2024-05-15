interface Election {
    id: string;
    title: string;
    date: string;
    daysForElection: string;
}

const fetchElections = async (): Promise<Election[]> => {
    try {
        const response = await fetch("https://api.example.com/elections");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: Election[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch elections:", error);
        throw error;
    }
};

export { fetchElections };



