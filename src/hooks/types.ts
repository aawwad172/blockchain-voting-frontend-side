export interface Candidate {
	id: string;
	name: string;
	votes: number;
	major: string;
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

export interface Admin {
	id: number;
	name: string;
	companyName: string;
	email: string;
}
