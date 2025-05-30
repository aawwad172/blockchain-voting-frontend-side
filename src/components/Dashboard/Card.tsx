import React from "react";
import { Link, useLocation } from "react-router-dom";
import ElectionPaperIcon from "@components/Icons/ElectionPaperIcon";
import { useAuth } from "@contexts/AuthContext";

interface CardProps {
	id: number;
	title: string;
	date: string;
	daysForElection: string;
}

const Card: React.FC<CardProps> = ({ id, title, date, daysForElection }) => {
	const { isLoggedIn, userRole } = useAuth();
	const location = useLocation();

	const getLinkPath = () => {
		const path = location.pathname;

		if (path.startsWith("/userAuth/elections")) {
			return `/candidates-election/${id}`;
		} else if (path.startsWith("/dashboard") || path.startsWith("/elections")) {
			return `/election/${id}`;
		} else {
			return userRole === "admin"
				? `/admin/election/${id}`
				: `authUser/election/${id}`;
		}
	};

	return (
		<div className="col-xl-6 col-sm-6 mb-xl-4 mb-3">
			<div className="card">
				<div className="card-body p-3">
					<div className="row">
						<div className="col-8">
							<div className="numbers">
								<p className="text-md mb-0 text-capitalize font-weight-bold text-gradient text-primary">
									{title}
								</p>
								<h4 className="font-weight-bolder mb-0">{date}</h4>
							</div>
						</div>
						<div className="col-4 d-flex justify-content-end">
							<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md p-1">
								{<ElectionPaperIcon />}
							</div>
						</div>
					</div>
					<div className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto text-right">
						<div className="d-flex justify-content-between">
							<p className="text-sm mb-0 text-capitalize font-weight-bold">
								{daysForElection}
							</p>
							<Link to={getLinkPath()}>
								<div>
									More Details
									<i
										className="fas fa-arrow-right text-sm ms-1 text-right"
										aria-hidden="true"></i>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
