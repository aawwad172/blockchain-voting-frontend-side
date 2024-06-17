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

const ElectionsPage: React.FC = () => {
	const [elections, setElections] = useState<Election[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);
	const [filteredElections, setFilteredElections] = useState<Election[]>([]);
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectAllChecked, setSelectAllChecked] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const electionsPerPage = 10;
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
	const [filterStatus, setFilterStatus] = useState<
		"all" | "pending" | "active" | "done"
	>("all");

	useFetchElections({
		setElections,
		setLoading,
		setError,
		useStaticData: true,
	});

	useEffect(() => {
		setFilteredElections(elections);
	}, [elections]);

	const { currentElections, totalPages, handlePrevPage, handleNextPage } =
		handlePagination(
			currentPage,
			electionsPerPage,
			filteredElections,
			setCurrentPage
		);

	if (loading) {
		return (
			<AdminDashboardLayout>
				<LoadingScreen />
			</AdminDashboardLayout>
		);
	}

	if (error) {
		return (
			<AdminDashboardLayout>
				<ErrorScreen errorMessage={error.message} />
			</AdminDashboardLayout>
		);
	}

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
								onCheckboxChange={() =>
									handleCheckboxChange(election.id, true, setSelectedRows)
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
