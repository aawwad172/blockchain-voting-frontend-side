import { useEffect } from "react";
import { fetchElections } from "@services/electionServices";
import { Election } from "@hooks/types";

type useFetchElectionsProps = {
	setElections: React.Dispatch<React.SetStateAction<Election[]>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<Error | null>>;
	useStaticData?: boolean;
};

export const useFetchElections = ({
	setElections,
	setLoading,
	setError,
	useStaticData = false,
}: useFetchElectionsProps): void => {
	useEffect(() => {
		const getElections = async () => {
			setLoading(true);
			try {
				const data = await fetchElections(useStaticData);
				setElections(data);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		getElections();
	}, [useStaticData, setElections, setLoading, setError]);
};
