import { useEffect } from "react";
import { fetchCandidates } from "@services/electionServices"; // Ensure the correct path
import { Candidate } from "@hooks/types"; // Ensure the correct path

interface UseFetchCandidatesProps {
	electionId: number;
	setCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<Error | null>>;
	useStaticData?: boolean;
}

export const useFetchCandidates = ({
	electionId,
	setCandidates,
	setLoading,
	setError,
	useStaticData = false,
}: UseFetchCandidatesProps): void => {
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			try {
				const candidates = await fetchCandidates(electionId, useStaticData);
				if (candidates) {
					setCandidates(candidates);
				} else {
					setCandidates([]);
				}
			} catch (error) {
				setError(error as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [electionId, setCandidates, setLoading, setError, useStaticData]);
};
