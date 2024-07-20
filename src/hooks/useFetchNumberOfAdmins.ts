import { useEffect } from "react";
import { fetchNumberOfAdmins } from "@services/userServices";

type useFetchNumberOfAdminsProps = {
	setNumberOfAdmins: React.Dispatch<React.SetStateAction<number>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<Error | null>>;
	useStaticData?: boolean;
};

export const useFetchNumberOfAdmins = ({
	setNumberOfAdmins,
	setLoading,
	setError,
	useStaticData = false,
}: useFetchNumberOfAdminsProps): void => {
	useEffect(() => {
		const getNumberOfAdmins = async () => {
			setLoading(true);
			try {
				const data = await fetchNumberOfAdmins(useStaticData);
				setNumberOfAdmins(data);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		getNumberOfAdmins();
	}, [setNumberOfAdmins, setLoading, setError, useStaticData]);
};
