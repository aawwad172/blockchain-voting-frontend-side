import React from "react";

interface YearColumnProps {
    year: string;
}

const YearColumn: React.FC<YearColumnProps> = ({ year }) => {
    return (
        <td>
            <p className="text-xs font-weight-bold mb-0 text-center">{year}</p>
        </td>
    );
}

export default YearColumn;
