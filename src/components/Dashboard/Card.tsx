import React from 'react';
import { Link } from 'react-router-dom';
import ElectionPaperIcon from "@components/Icons/ElectionPaperIcon";

interface CardProps {
	id: number;
	title: string;
	date: string;
	daysForElection: string;
}

// fixme: Implement the `daysForElection` logic when to write '${} Days Left to end' and when to write '${} Days left to start'

const Card: React.FC<CardProps> = ({ id, title, date, daysForElection }) => {
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
							{/* TODO: Fix how the route should look like: with ID or Name or What! */}
							<Link to={`/election/${id}`}>
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
