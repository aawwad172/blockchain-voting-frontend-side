import React from "react";

interface StatesCardProps {
	title: string;
	number: number;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Card: React.FC<StatesCardProps> = ({ title, number, Icon }) => {
	return (
		<div className="col-xl-6 col-sm-6 mb-xl-4 mb-8">
			<div className="card">
				<div className="card-body p-3">
					<div className="row">
						<div className="col-8">
							<div className="numbers">
								<p className="text-md mb-0 text-capitalize font-weight-bold text-gradient text-primary">
									{title}
								</p>
								<h4 className="font-weight-bolder mb-0">{number}</h4>
							</div>
						</div>
						<div className="col-4 d-flex justify-content-end">
							<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md p-1">
								<Icon />
							</div>
						</div>
					</div>
					<div className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto text-right"></div>
				</div>
			</div>
		</div>
	);
};

export default Card;
