import { useEffect } from "react";
import { fetchAdminById } from "@utils/SuperAdminDashboardUtils/fetchAdminById";
import { Admin } from "@hooks/types";

type useFetchAdminByIdProps = {
	adminId: string | undefined;
	useStaticData: boolean;
	setAdmin: React.Dispatch<React.SetStateAction<Admin | null>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<Error | null>>;
};

export const useFetchAdminById = ({
	adminId,
	setAdmin,
	setLoading,
	setError,
}: useFetchAdminByIdProps): void => {
	useEffect(() => {
		const getAdmin = async () => {
			try {
				setLoading(true);
				const data = await fetchAdminById(Number(adminId), true);
				setAdmin(data);
				setLoading(false);
			} catch (error) {
				console.error("Failed to fetch admin:", error);
				setError(error as Error);
			} finally {
				setLoading(false);
			}
		};
		getAdmin();
	}, [adminId, setAdmin, setLoading, setError]);
};
