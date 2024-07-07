import { useEffect } from "react";
import { fetchAdmins } from "@utils/SuperAdminDashboardUtils/fetchAdmins";
import { Admin } from "@hooks/types";

type useFetchAdminsProps = {
	setAdmins: React.Dispatch<React.SetStateAction<Admin[]>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<Error | null>>;
	useStaticData?: boolean;
};

export const useFetchAdmins = ({
	setLoading,
	setError,
	setAdmins,
	useStaticData = false,
}: useFetchAdminsProps): void => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const admins = await fetchAdmins(useStaticData);
				setAdmins(admins);
				setLoading(false);
			} catch (error) {
				setError(error as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [setLoading, setError, setAdmins, useStaticData]);
};
