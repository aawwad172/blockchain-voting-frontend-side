import axios from "axios";
import { Admin } from "@hooks/types";
import { loadStaticAdminData } from "@utils/SuperAdminDashboardUtils/staticAdminData";

/**
 * This function fetches a list of admins from the API or loads static data if useStaticData is true.
 * 
 * @param useStaticData - A boolean indicating whether to load static data or fetch data from the API.
 * @returns A Promise that resolves to an array of Admin objects.
 */
export const fetchAdmins = async (useStaticData: boolean): Promise<Admin[]> => {
	// If useStaticData is true, load static admin data and return it.
	if (useStaticData) {
		return loadStaticAdminData();
	}

	try {
		// If useStaticData is false, fetch admin data from the API.
		// Todo: Replace "/api/admins" with your real API endpoint
		const response = await axios.get("/api/admins");

		// Extract the data from the response and return it.
		return response.data;
	} catch (error) {
		// If fetching data from the API fails, log an error message and load static admin data.
		console.error(
			"Failed to fetch Admins from API, loading static data:",
			error
		);
		return loadStaticAdminData();
	}
};
