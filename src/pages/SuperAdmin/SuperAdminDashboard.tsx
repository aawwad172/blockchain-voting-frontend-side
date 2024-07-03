import SuperAdminDashboardLayout from "@layouts/SuperAdminDashboardLayout";
import StatesCard from "@components/SuperAdminDashboard/StatesCard";
import PersonIcon from "@components/Icons/PersonIcon";
import React from "react";
import { useState } from "react";
import LoadingScreen from "@components/shared/LoadingScreen";
import { useFetchNumberOfAdmins } from "@hooks/useFetchNumberOfAdmins";
import ElectionPaperIcon from "@components/Icons/ElectionPaperIcon";
const SuperAdminDashboard: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [numberOfAdmins, setNumberOfAdmins] = useState<number>(0);
	const [error, setError] = useState<Error | null>(null);

	useFetchNumberOfAdmins({ setLoading, setNumberOfAdmins, setError });

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
				<div>Error: {error.message}</div>
			</SuperAdminDashboardLayout>
		);
	}

	return (
		<SuperAdminDashboardLayout>
			<div className="row">
				<StatesCard
					title="Total Admins"
					number={numberOfAdmins}
					Icon={PersonIcon}
				/>
				<StatesCard
					title="Total Elections"
					number={12}
					Icon={ElectionPaperIcon}
				/>
			</div>
		</SuperAdminDashboardLayout>
	);
};
export default SuperAdminDashboard;
