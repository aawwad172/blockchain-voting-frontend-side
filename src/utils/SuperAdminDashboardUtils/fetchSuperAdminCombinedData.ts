// fetchSuperAdminCombinedData.ts
import { Admin } from "@hooks/types";
import { loadStaticAdminData } from "./staticCombinedData";

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
