import React from "react";
import { Link } from "react-router-dom";

interface ActionColumnProps {
    electionId: number;  // Assuming electionId is of type number, adjust if it's a string
}

const ActionColumn: React.FC<ActionColumnProps> = ({ electionId }) => {
    return (
        <td className="align-middle">
            <Link to={`/election/${electionId}`} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                <p className="text-center">View Details</p>
            </Link>
        </td>
    );
}

export default ActionColumn;
