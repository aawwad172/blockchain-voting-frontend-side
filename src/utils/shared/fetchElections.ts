import axios from "axios";

interface Election {
	id: number;
	title: string;
	startDate: string;
	endDate: string;
	year: string;
	status: string;
}

export const fetchElections = async (): Promise<Election[]> => {
	try {
		// todo: Replace with real API endpoint
		const response = await axios.get("https://api.example.com/elections");
		return response.data;
	} catch (error) {
		console.error("Failed to fetch elections:", error);
		throw error;
	}
};
