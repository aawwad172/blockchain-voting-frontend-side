import axios from "axios";
import { Election } from "@hooks/types";
import { loadStaticElectionsData } from "@utils/shared/staticElectionsData";

export const fetchElections = async (
	useStaticData: boolean
): Promise<Election[]> => {
	if (useStaticData) {
		return loadStaticElectionsData();
	}

	try {
		// Replace with real API endpoint
		const response = await axios.get("https://api.example.com/elections");
		return response.data;
	} catch (error) {
		console.error(
			"Failed to fetch elections from API, loading static data:",
			error
		);
		return loadStaticElectionsData(); // Fallback to static data
	}
};
