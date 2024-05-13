import React from "react";
import ActionColumn from "./ActionColumn";
import TitleColumn from "./TitleColumt";
import YearColumn from "./YearColumn";
import StatusBadge from "./StatusBandge";

interface TableRowProps {
    electionId: number
    title: string;
    year: string;
    status: string;
}

const TableRow: React.FC<TableRowProps> = ({ electionId, title, year, status }) => {
    return (
        <tr>
            <TitleColumn title={title} />
            <YearColumn year={year} />
            <StatusBadge status={status} />
            <ActionColumn electionId={electionId} />
        </tr>
    );
}

export default TableRow;