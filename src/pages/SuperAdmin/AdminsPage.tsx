import TableCard from "@components/Dashboard/Table/TableCard";
import TableHeader from "@components/Dashboard/Table/TableHeader";
import SuperAdminDashboardLayout from "@layouts/SuperAdminDashboardLayout";
import React, { useState, useEffect } from "react";
import { Admin } from "@hooks/types";
import LoadingScreen from "@components/shared/LoadingScreen";
import ErrorScreen from "@components/shared/ErrorScreen";
import SuperAdminTableRow from "@components/SuperAdminDashboard/SuperAdminTable/SuperAdminTableRow";
import {
	handleCheckboxChange,
	handleDeleteSelected,
	confirmDelete,
	cancelDelete,
	handleAddAdmin,
	addNewAdmin,
	handleSelectAll,
	handleSort,
	handleFilter,
	handlePagination,
} from "@utils/adminUtils";
import Pagination from "@components/Dashboard/Table/Pagination";
import SortButton from "@components/Dashboard/Table/SortButton";
import FilterButton from "@components/Dashboard/Table/FilterButton";
import ConfirmationModal from "@components/Dashboard/Modals/ConfirmationModal";
// import AddAdminModal from "@components/Dashboard/Modals/AddAdminModal";

const AdminsPage: React.FC = () => {
	// State variables

	// Holds the list of admins fetched from the server or static data.
	const [admins, setAdmins] = useState<Admin[]>([]);

	// Indicates whether the data is currently being loaded from the server.
	const [loading, setLoading] = useState<boolean>(false);

	// Stores any error that occurs during the data fetching process.
	const [error, setError] = useState<Error | null>(null);

	// Holds the list of admins after applying any filters or sorting.
	const [filteredAdmins, setFilteredAdmins] = useState<Admin[]>([]);

	// Keeps track of the IDs of the admins that have been selected (checked) by the user.
	const [selectedRows, setSelectedRows] = useState<number[]>([]);

	// Stores the current page number for pagination.
	const [currentPage, setCurrentPage] = useState(1);

	// Indicates whether the "Select All" checkbox is checked.
	const [selectAllChecked, setSelectAllChecked] = useState(false);

	// Controls the visibility of the delete confirmation modal.
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	// Controls the visibility of the add admin modal.
	const [showAddModal, setShowAddModal] = useState(false);

	// Constant defining the number of admins to display per page.
	const adminsPerPage = 10;

	// Keeps track of the current sort order (ascending or descending).
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

	// Stores the current filter status applied to the list of admins.
	const [filterStatus, setFilterStatus] = useState<
		"all" | "pending" | "active" | "done"
	>("all");

	// Custom hook to fetch admins (assuming similar to useFetchElections)
	// useFetchAdmins({
	//   setAdmins,
	//   setLoading,
	//   setError,
	//   useStaticData: true, // Use static data for testing
	// });

	// Effect to update filtered admins when the admins state changes
	useEffect(() => {
		setFilteredAdmins(admins);
	}, [admins]);

	// Handle pagination
	const { currentAdmins, totalPages, handlePrevPage, handleNextPage } =
		handlePagination(
			currentPage,
			adminsPerPage,
			filteredAdmins,
			setCurrentPage
		);

	// Render loading screen if data is still loading
	if (loading) {
		return (
			<SuperAdminDashboardLayout>
				<LoadingScreen />
			</SuperAdminDashboardLayout>
		);
	}

	// Render error screen if there was an error fetching data
	if (error) {
		return (
			<SuperAdminDashboardLayout>
				<ErrorScreen errorMessage={error.message} />
			</SuperAdminDashboardLayout>
		);
	}

	// Main component render
	return (
		<SuperAdminDashboardLayout>
			<div className="container-fluid py-1">
				<TableCard
					headerTitle="Admins"
					onAddNew={() => handleAddAdmin(setShowAddModal)}
					onDeleteSelected={() => handleDeleteSelected(setShowDeleteModal)}
					isDeleteDisabled={selectedRows.length === 0}
					sortButton={
						<SortButton
							sortOrder={sortOrder}
							onSort={(criteria) =>
								handleSort(
									criteria,
									filteredAdmins,
									setFilteredAdmins,
									sortOrder,
									setSortOrder
								)
							}
							criteria={[
								{ key: "name", label: "Alphabetically" },
								{ key: "companyName", label: "By Company Name" },
								{ key: "email", label: "By Email" },
							]}
						/>
					}
					filterButton={
						<FilterButton
							onFilter={(status) =>
								handleFilter(status, admins, setFilteredAdmins, setFilterStatus)
							}
						/>
					}>
					<TableHeader
						columns={["Admin Name", "Company Name", "Email", ""]}
						onSelectAll={(checked) =>
							handleSelectAll(
								checked,
								filteredAdmins,
								setSelectedRows,
								setSelectAllChecked
							)
						}
						selectAllChecked={selectAllChecked}
					/>
					<tbody>
						{currentAdmins.map((admin: Admin) => (
							<SuperAdminTableRow
								key={admin.id}
								adminId={admin.id}
								adminName={admin.name}
								companyName={admin.companyName}
								email={admin.email}
								checked={selectedRows.includes(admin.id)}
								onCheckboxChange={(adminId, checked: boolean) =>
									handleCheckboxChange(adminId, checked, setSelectedRows)
								}
							/>
						))}
					</tbody>
				</TableCard>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
			<ConfirmationModal
				show={showDeleteModal}
				title="Confirm Deletion"
				message="Are you sure you want to delete the selected admins?"
				onConfirm={() =>
					confirmDelete(
						selectedRows,
						setAdmins,
						setFilteredAdmins,
						setSelectedRows,
						setSelectAllChecked,
						setShowDeleteModal
					)
				}
				onCancel={() => cancelDelete(setShowDeleteModal)}
			/>
			{/* <AddAdminModal
				show={showAddModal}
				onClose={() => {
					console.log("Closing modal");
					setShowAddModal(false);
				}}
				onAddAdmin={(newAdmin) =>
					addNewAdmin(newAdmin, admins, setAdmins, setFilteredAdmins)
				}
			/> */}
		</SuperAdminDashboardLayout>
	);
};

export default AdminsPage;
