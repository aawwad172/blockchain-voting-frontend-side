import axios from "axios";
import { loadStaticElectionsData } from "@utils/shared/staticElectionsData";

export const fetchNumberOfAdmins = async (useStaticData: boolean = false) => {
	if (useStaticData) {
		const staticData = loadStaticElectionsData();
		return staticData.length;
	}

	try {
		// todo: Replace with real API endpoint
		const response = await axios.get(`https://api.example.com/admins/total`);
		return response.data;
	} catch (error) {
		console.error(`Failed to fetch number of Admins from API:`, error);
		const staticData = loadStaticElectionsData();
		return staticData.length; // Fallback to static data
	}
};
