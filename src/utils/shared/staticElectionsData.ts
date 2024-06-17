import { calculateYear, calculateStatus } from "@utils/shared/helpers";

interface Election {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    year: string;
    status: string;
}

export const loadStaticElectionsData = () => {
    const staticData: Election[] = [
        {
            id: 1,
            title: "Local Elections",
            startDate: "2022-05-15",
            endDate: "2025-05-17",
            year: calculateYear("2022-05-15", "2025-05-17"),
            status: calculateStatus("2022-05-15", "2025-05-17"),
        },
        {
            id: 2,
            title: "National Elections",
            startDate: "2021-05-15",
            endDate: "2022-05-17",
            year: calculateYear("2023-05-15", "2023-05-17"),
            status: calculateStatus("2023-05-15", "2023-05-17"),
        },
        {
            id: 3,
            title: "Special Elections",
            startDate: "2021-05-15",
            endDate: "2021-05-17",
            year: calculateYear("2021-05-15", "2021-05-17"),
            status: calculateStatus("2021-05-15", "2021-05-17"),
        },

        // Add other records here...
    ];
    return staticData;
};