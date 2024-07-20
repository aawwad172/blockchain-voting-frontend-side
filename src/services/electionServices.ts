import axios from "axios";
import { Election } from "@hooks/types";
import { loadStaticElectionsData } from "@utils/shared/staticElectionsData";

export const fetchElection = async (
	id: number,
	useStaticData: boolean = false
): Promise<Election | null> => {
	if (useStaticData) {
		const staticData = loadStaticElectionsData();
		return staticData.find((election) => election.id === id) || null;
	}
	try {
		// Replace with real API endpoint
		const response = await axios.get(`http://localhost:3000/election/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Failed to fetch election with ID ${id} from API:`, error);
		const staticData = loadStaticElectionsData();
		return staticData.find((election) => election.id === id) || null; // Fallback to static data
	}
};

export const fetchElections = async (
	useStaticData: boolean
): Promise<Election[]> => {
	if (useStaticData) {
		return loadStaticElectionsData();
	}

	try {
		// Todo: Replace with your real API endpoint
		const response = await axios.get("http://localhost:3000/elections");
		return response.data;
	} catch (error) {
		console.error(
			"Failed to fetch elections from API, loading static data:",
			error
		);
		return loadStaticElectionsData(); // Fallback to static data
	}
};

import { Candidate } from "@hooks/types"; // Ensure the correct path

export const fetchCandidates = async (
	electionId: number,
	useStaticData: boolean = false
): Promise<Candidate[]> => {
	if (useStaticData) {
		// Load static candidate data if needed
		const staticData = loadStaticElectionsData();
		const election = staticData.find((election) => election.id === electionId);
		if (election) {
			return election.candidates;
		} else {
			throw new Error(
				`Election with ID ${electionId} not found in static data`
			);
		}
	}

	try {
		const response = await axios.get(
			`http://localhost:3000/election/${electionId}/candidates`
		);
		if (response.data) {
			// Transform the data into the expected format
			const { ids, names, votes } = response.data;
			const candidates = ids.map((id: string, index: number) => ({
				id,
				name: names[index],
				votes: parseInt(votes[index], 10),
			}));
			return candidates;
		} else {
			console.error(`No data returned for election ID ${electionId}`);
			return [];
		}
	} catch (error) {
		console.error(
			`Failed to fetch candidates for election ID ${electionId} from API:`,
			error
		);
		return [];
	}
};

export const deleteElection = async (electionId: number): Promise<void> => {
	try {
		const response = await axios.delete(
			`http://localhost:3000/election/${electionId}`
		);
		if (response.status !== 200) {
			throw new Error(`Failed to delete election with ID ${electionId}`);
		}
	} catch (error) {
		console.error(`Error deleting election with ID ${electionId}:`, error);
		throw error;
	}
};
