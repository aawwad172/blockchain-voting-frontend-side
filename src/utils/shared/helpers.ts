import { Election } from "@hooks/types";

export const calculateYear = (startDate: string, endDate: string): string => {
	const startYear = new Date(startDate).getFullYear();
	const endYear = new Date(endDate).getFullYear();

	return startYear === endYear
		? startYear.toString()
		: `${startYear} - ${endYear}`;
};

export const calculateStatus = (startDate: string, endDate: string): string => {
	const now = new Date();
	const start = new Date(startDate);
	const end = new Date(endDate);

	// Set the time part to 00:00:00 to only compare the date part
	const nowDateOnly = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate()
	);
	const startDateOnly = new Date(
		start.getFullYear(),
		start.getMonth(),
		start.getDate()
	);
	const endDateOnly = new Date(
		end.getFullYear(),
		end.getMonth(),
		end.getDate()
	);

	if (nowDateOnly < startDateOnly) {
		return "pending";
	} else if (nowDateOnly > endDateOnly) {
		return "done";
	} else {
		return "active";
	}
};

export const chunkArray = (arr: Election[], size: number): Election[][] => {
	const chunkedArr: Election[][] = [];
	let i = 0;
	while (i < arr.length) {
		chunkedArr.push(arr.slice(i, i + size));
		i += size;
	}
	return chunkedArr;
};

export const electionEndsIn = (endDate: string): string => {
	const end = new Date(endDate);
	const now = new Date();
	const diff = end.getTime() - now.getTime();

	// Convert milliseconds to days
	const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

	if (days === 0) {
		return "Election ends Today";
	} else if (days > 0) {
		const years = Math.floor(days / 365);
		const months = Math.floor((days % 365) / 30);
		const remainingDays = days % 30;
		const parts = [];

		if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
		if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
		if (remainingDays > 0)
			parts.push(`${remainingDays} day${remainingDays > 1 ? "s" : ""}`);

		return `Election ends in ${parts.join(", ")}`;
	} else {
		const absDays = Math.abs(days);
		const years = Math.floor(absDays / 365);
		const months = Math.floor((absDays % 365) / 30);
		const remainingDays = absDays % 30;
		const parts = [];

		if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
		if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
		if (remainingDays > 0)
			parts.push(`${remainingDays} day${remainingDays > 1 ? "s" : ""}`);

		return `Election ended ${parts.join(", ")} ago`;
	}
};
