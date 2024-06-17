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