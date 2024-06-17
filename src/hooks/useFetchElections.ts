import { useEffect } from "react";
import { fetchElections } from "@utils/shared/fetchElections";
import { loadStaticElectionsData } from "@utils/shared/staticElectionsData";

export interface Election {
	id: number;
	title: string;
	startDate: string;
	endDate: string;
	year: string;
	status: string;
}

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
				if (useStaticData) {
					const data = loadStaticElectionsData();
					setElections(data);
				} else {
					const data = await fetchElections();
					setElections(data);
				}
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		getElections();
	}, [useStaticData, setElections, setLoading, setError]);
};
