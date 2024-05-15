import React from "react";

interface TableCardsProps {
    headerTitle: string;
    children: React.ReactNode;
}

const TableCard: React.FC<TableCardsProps> = ({ headerTitle, children }) => {
    return (
        <div className="card mb-4">
            <div className="card-header pb-0">
                <h6>{headerTitle}</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                        {children}
                    </table>

                </div>
            </div>
        </div>
    );
}

export default TableCard;