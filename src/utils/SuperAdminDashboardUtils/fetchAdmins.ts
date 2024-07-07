import axios from "axios";
import { Admin } from "@hooks/types";
import { loadStaticAdminData } from "@utils/SuperAdminDashboardUtils/staticAdminData";

export const fetchAdmins = async (useStaticData: boolean): Promise<Admin[]> => {
	if (useStaticData) {
		return loadStaticAdminData();
	}

	try {
		// Todo: Replace with your real API endpoint
		const response = await axios.get("/api/admins");
		return response.data;
	} catch (error) {
		console.error(
			"Failed to fetch Admins from API, loading static data:",
			error
		);
		return loadStaticAdminData();
	}
};
