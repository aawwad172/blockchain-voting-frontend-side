// useFetchSuperAdminCombinedData.ts
import { useEffect } from "react";
import { fetchSuperAdminCombinedData } from "@services/userServices";
import { Admin } from "./types";

export const useFetchSuperAdminCombinedData = (
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setError: React.Dispatch<React.SetStateAction<Error | null>>,
	setAdmins: React.Dispatch<React.SetStateAction<Admin[]>>,
	setElectionCount: React.Dispatch<React.SetStateAction<number>>,
	useStaticData: boolean
) => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const { admins, electionCount } = await fetchSuperAdminCombinedData(
					useStaticData
				);
				setAdmins(admins);
				setElectionCount(electionCount);
				setLoading(false);
			} catch (error) {
				setError(error as Error);
				setLoading(false);
			}
		};

		fetchData();
	}, [setLoading, setError, setAdmins, setElectionCount, useStaticData]);
};
