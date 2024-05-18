import React from "react";
import ProfileCard, { ProfileCardProps } from "./ProfileCard";

interface TeamMembersProps {
	profiles: ProfileCardProps[];
}

const TeamMembers: React.FC<TeamMembersProps> = ({ profiles }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 mb-4">
					<div className="card-header pb-0 p-3">
						<h1 className="mb-1">Team Members</h1>
					</div>
				</div>
			</div>
			<div className="row">
				{profiles.map((profile, index) => (
					<ProfileCard
						key={index}
						{...profile}
					/>
				))}
			</div>
		</div>
	);
};

export default TeamMembers;
