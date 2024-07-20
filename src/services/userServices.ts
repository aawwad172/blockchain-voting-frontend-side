import axios from "axios";
import { Admin } from "@hooks/types";
import { loadStaticAdminData } from "@utils/SuperAdminDashboardUtils/staticAdminData";

export const updateAdminDetails = async (admin: Admin): Promise<void> => {
	try {
		const response = await axios.put(`/api/admins/${admin.id}`, admin);
		if (response.status !== 200) {
			throw new Error("Failed to update admin details");
		}
		console.log("Admin details updated successfully");
	} catch (error) {
		throw new Error(
			`Error updating admin details: ${(error as Error).message}`
		);
	}
};

export const fetchNumberOfAdmins = async (
	useStaticData: boolean
): Promise<number> => {
	if (useStaticData) {
		const staticData = loadStaticAdminData();
		return staticData.length;
	}

	try {
		// Todo: Replace with your real API endpoint
		const response = await axios.get("/api/admins");
		return response.data.length;
	} catch (error) {
		console.error("Failed to fetch number of admins from API:", error);
		const staticData = loadStaticAdminData();
		return staticData.length;
	}
};

export const fetchAdminById = async (
	id: number,
	useStaticData: boolean
): Promise<Admin> => {
	if (useStaticData) {
		const staticData = loadStaticAdminData();
		const admin = staticData.find((admin) => admin.id === id);
		if (!admin) {
			throw new Error("Admin not found");
		}
		return admin;
	}

	try {
		// Todo: Replace with your real API endpoint
		const response = await axios.get(`/api/admins/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Failed to fetch admin with ID ${id} from API:`, error);
		const staticData = loadStaticAdminData();
		const admin = staticData.find((admin) => admin.id === id);
		if (!admin) {
			throw new Error("Admin not found");
		}
		return admin;
	}
};

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

// fetchSuperAdminCombinedData.ts

const staticData = {
	admins: loadStaticAdminData(),
	electionCount: 10, // Your static election count here
};

export const fetchSuperAdminCombinedData = async (
	useStaticData: boolean
): Promise<{ admins: Admin[]; electionCount: number }> => {
	if (useStaticData) {
		return staticData;
	}

	const [adminsResponse, electionsCountResponse] = await Promise.all([
		fetch("/api/admins"), // Adjust the URL as needed
		fetch("/api/elections/count"), // Adjust the URL as needed
	]);

	if (!adminsResponse.ok || !electionsCountResponse.ok) {
		throw new Error("Failed to fetch data");
	}

	const admins = await adminsResponse.json();
	const electionCount = await electionsCountResponse.json();

	return { admins, electionCount };
};
