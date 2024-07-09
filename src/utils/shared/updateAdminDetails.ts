import axios from "axios";
import { Admin } from "@hooks/types";

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
