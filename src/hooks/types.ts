export interface Candidate {
	id: string;
	name: string;
	votes: number;
}

export interface Election {
	id: number;
	title: string;
	startDate: string;
	endDate: string;
	year: string;
	status: string;
	numberOfCandidates: number;
	totalVotes: number;
	candidates: Candidate[];
}
