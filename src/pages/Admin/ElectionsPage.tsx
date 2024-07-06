import React, { useState, useEffect } from "react";
import TableHeader from "@components/Dashboard/Table/TableHeader";
import TableCard from "@components/Dashboard/Table/TableCard";
import AdminDashboardLayout from "@layouts/AdminDashboardLayout";
import TableRow from "@components/Dashboard/Table/TableRow";
import ConfirmationModal from "@components/Dashboard/Modals/ConfirmationModal";
import AddElectionModal from "@components/Dashboard/Modals/AddElectionModal";
import Pagination from "@components/Dashboard/Table/Pagination";
import LoadingScreen from "@components/shared/LoadingScreen";
import { useFetchElections, Election } from "@hooks/useFetchElections";
import SortButton from "@components/Dashboard/Table/SortButton";
import FilterButton from "@components/Dashboard/Table/FilterButton";
import {
	handleCheckboxChange,
	handleDeleteSelected,
	confirmDelete,
	cancelDelete,
	handleAddElection,
	addNewElection,
	handleSelectAll,
	handleSort,
	handleFilter,
	handlePagination,
} from "@utils/electionUtils";
import ErrorScreen from "@components/shared/ErrorScreen";

/**
 * The main component for displaying and managing elections.
 * This component handles the state and logic for displaying elections,
 * sorting, filtering, pagination, and modals for adding and deleting elections.
 */
const ElectionsPage: React.FC = () => {
	// State variables

	// Holds the list of elections fetched from the server or static data.
	const [elections, setElections] = useState<Election[]>([]);

	// Indicates whether the data is currently being loaded from the server.
	const [loading, setLoading] = useState<boolean>(true);

	// Stores any error that occurs during the data fetching process.
	const [error, setError] = useState<Error | null>(null);

	// Holds the list of elections after applying any filters or sorting.
	const [filteredElections, setFilteredElections] = useState<Election[]>([]);

	// Keeps track of the IDs of the elections that have been selected (checked) by the user.
	const [selectedRows, setSelectedRows] = useState<number[]>([]);

	// Stores the current page number for pagination.
	const [currentPage, setCurrentPage] = useState(1);

	// Indicates whether the "Select All" checkbox is checked.
	const [selectAllChecked, setSelectAllChecked] = useState(false);

	// Controls the visibility of the delete confirmation modal.
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	// Controls the visibility of the add election modal.
	const [showAddModal, setShowAddModal] = useState(false);

	// Constant defining the number of elections to display per page.
	const electionsPerPage = 10;

	// Keeps track of the current sort order (ascending or descending).
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

	// Stores the current filter status applied to the list of elections.
	const [filterStatus, setFilterStatus] = useState<
		"all" | "pending" | "active" | "done"
	>("all");

	// Custom hook to fetch elections
	useFetchElections({
		setElections,
		setLoading,
		setError,
		useStaticData: false, // Use static data for testing
	});

	// Effect to update filtered elections when the elections state changes
	useEffect(() => {
		setFilteredElections(elections);
	}, [elections]);

	// Handle pagination
	const { currentElections, totalPages, handlePrevPage, handleNextPage } =
		handlePagination(
			currentPage,
			electionsPerPage,
			filteredElections,
			setCurrentPage
		);

	// Render loading screen if data is still loading
	if (loading) {
		return (
			<AdminDashboardLayout>
				<LoadingScreen />
			</AdminDashboardLayout>
		);
	}

	// Render error screen if there was an error fetching data
	if (error) {
		return (
			<AdminDashboardLayout>
				<ErrorScreen errorMessage={error.message} />
			</AdminDashboardLayout>
		);
	}

	// Main component render
	return (
		<AdminDashboardLayout>
			<div className="container-fluid py-1">
				<TableCard
					headerTitle="Elections"
					onAddNew={() => handleAddElection(setShowAddModal)}
					onDeleteSelected={() => handleDeleteSelected(setShowDeleteModal)}
					isDeleteDisabled={selectedRows.length === 0}
					sortButton={
						<SortButton
							sortOrder={sortOrder}
							onSort={(criteria) =>
								handleSort(
									criteria,
									filteredElections,
									setFilteredElections,
									sortOrder,
									setSortOrder
								)
							}
							criteria={[
								{ key: "title", label: "Alphabetically" },
								{ key: "startDate", label: "By Start Date" },
								{ key: "endDate", label: "By End Date" },
							]}
						/>
					}
					filterButton={
						<FilterButton
							onFilter={(status) =>
								handleFilter(
									status,
									elections,
									setFilteredElections,
									setFilterStatus
								)
							}
						/>
					}>
					<TableHeader
						columns={["Title", "Year", "Status", "Actions"]}
						onSelectAll={(checked) =>
							handleSelectAll(
								checked,
								filteredElections,
								setSelectedRows,
								setSelectAllChecked
							)
						}
						selectAllChecked={selectAllChecked}
					/>
					<tbody>
						{currentElections.map((election) => (
							<TableRow
								key={election.id}
								electionId={election.id}
								title={election.title}
								year={election.year}
								startDate={election.startDate}
								endDate={election.endDate}
								status={election.status}
								onCheckboxChange={(election, checked: boolean) =>
									handleCheckboxChange(election, checked, setSelectedRows)
								}
								checked={selectedRows.includes(election.id)}
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
				message="Are you sure you want to delete the selected elections?"
				onConfirm={() =>
					confirmDelete(
						selectedRows,
						setElections,
						setFilteredElections,
						setSelectedRows,
						setSelectAllChecked,
						setShowDeleteModal
					)
				}
				onCancel={() => cancelDelete(setShowDeleteModal)}
			/>
			<AddElectionModal
				show={showAddModal}
				onClose={() => {
					console.log("Closing modal");
					setShowAddModal(false);
				}}
				onAddElection={(newElection) =>
					addNewElection(
						newElection,
						elections,
						setElections,
						setFilteredElections
					)
				}
			/>
		</AdminDashboardLayout>
	);
};

export default ElectionsPage;
