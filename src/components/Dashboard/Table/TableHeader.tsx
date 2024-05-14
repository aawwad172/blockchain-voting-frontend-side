import React from "react";

interface TableHeaderProps {
    columns: string[];
    isCentered?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns, isCentered = false }) => {
    return (
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className={
                        (index === 0 && !isCentered) ?
                            "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" :
                            "text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    }>{column}</th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHeader;