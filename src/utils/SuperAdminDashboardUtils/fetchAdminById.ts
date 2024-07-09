import axios from "axios";
import { Admin } from "@hooks/types";
import { loadStaticAdminData } from "./staticAdminData";

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
