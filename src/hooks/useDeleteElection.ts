import { useState } from "react";
import { deleteElection } from "@services/electionServices"; // Adjust the import path as needed

interface UseDeleteElectionReturn {
	deleteElection: (electionId: number) => Promise<void>;
	isDeleting: boolean;
	error: Error | null;
}

export const useDeleteElection = (): UseDeleteElectionReturn => {
	const [isDeleting, setIsDeleting] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	const handleDeleteElection = async (electionId: number): Promise<void> => {
		setIsDeleting(true);
		setError(null);

		try {
			await deleteElection(electionId);
		} catch (err) {
			setError(
				err instanceof Error ? err : new Error("An unknown error occurred")
			);
		} finally {
			setIsDeleting(false);
		}
	};

	return {
		deleteElection: handleDeleteElection,
		isDeleting,
		error,
	};
};
