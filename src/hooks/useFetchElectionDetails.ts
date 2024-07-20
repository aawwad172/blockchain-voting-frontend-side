import { useEffect } from "react";
import { fetchElection } from "@services/electionServices";
import { Election } from "@hooks/types";

type useFetchElectionDetailsProps = {
	id: number;
	setElection: React.Dispatch<React.SetStateAction<Election | null>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<Error | null>>;
	useStaticData: boolean;
};

export const useFetchElectionDetails = ({
	id,
	setElection,
	setLoading,
	setError,
	useStaticData = false,
}: useFetchElectionDetailsProps): void => {
	useEffect(() => {
		const getElection = async () => {
			setLoading(true);
			try {
				const data = await fetchElection(id, useStaticData);
				setElection(data);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		getElection();
	}, [id, useStaticData, setElection, setLoading, setError]);
};
