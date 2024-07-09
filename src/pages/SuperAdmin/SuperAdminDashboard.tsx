import SuperAdminDashboardLayout from "@layouts/SuperAdminDashboardLayout";
import StatesCard from "@components/SuperAdminDashboard/StatesCard";
import PersonIcon from "@components/Icons/PersonIcon";
import React, { useState } from "react";
import LoadingScreen from "@components/shared/LoadingScreen";
import ElectionPaperIcon from "@components/Icons/ElectionPaperIcon";
import TableCard from "@components/Dashboard/Table/TableCard";
import TableHeader from "@components/Dashboard/Table/TableHeader";
import SuperAdminTableRow from "@components/SuperAdminDashboard/SuperAdminTable/SuperAdminTableRow";
import { Admin } from "@hooks/types";
import { useFetchSuperAdminCombinedData } from "@hooks/useFetchSuperAdminCombinedData";
import ErrorScreen from "@components/shared/ErrorScreen";

const SuperAdminDashboard: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [admins, setAdmins] = useState<Admin[]>([]);
	const [electionCount, setElectionCount] = useState<number>(0);
	const useStaticData = true; // todo: Change this to true to use static data

	useFetchSuperAdminCombinedData(
		setLoading,
		setError,
		setAdmins,
		setElectionCount,
		useStaticData
	);

	if (loading) {
		return (
			<SuperAdminDashboardLayout>
				<LoadingScreen />
			</SuperAdminDashboardLayout>
		);
	}

	if (error) {
		return (
			<SuperAdminDashboardLayout>
				<ErrorScreen errorMessage={error.message} />
			</SuperAdminDashboardLayout>
		);
	}

	return (
		<SuperAdminDashboardLayout>
			<div className="row">
				<StatesCard
					title="Total Admins"
					number={admins.length}
					Icon={PersonIcon}
				/>
				<StatesCard
					title="Total Elections"
					number={electionCount}
					Icon={ElectionPaperIcon}
				/>
			</div>
			<div className="row">
				<TableCard headerTitle="Recent Admins">
					<TableHeader
						columns={["Admin Name", "Company Name", "Email", ""]}
						isCentered={true}
					/>
					{admins.map((admin) => (
						<SuperAdminTableRow
							key={admin.id}
							adminId={admin.id}
							adminName={admin.name}
							companyName={admin.companyName}
							email={admin.email}
						/>
					))}
				</TableCard>
			</div>
		</SuperAdminDashboardLayout>
	);
};

export default SuperAdminDashboard;
