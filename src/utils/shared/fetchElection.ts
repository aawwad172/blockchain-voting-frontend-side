import axios from "axios";
import { Election } from "@hooks/types";
import { loadStaticElectionsData } from "@utils/shared/staticElectionsData";

export const fetchElection = async (
	id: number,
	useStaticData: boolean = false
): Promise<Election | null> => {
	if (useStaticData) {
		const staticData = loadStaticElectionsData();
		return staticData.find((election) => election.id === id) || null;
	}

	try {
		// Replace with real API endpoint
		const response = await axios.get(`https://api.example.com/elections/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Failed to fetch election with ID ${id} from API:`, error);
		const staticData = loadStaticElectionsData();
		return staticData.find((election) => election.id === id) || null; // Fallback to static data
	}
};
