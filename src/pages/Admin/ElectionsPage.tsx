import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faFilter } from "@fortawesome/free-solid-svg-icons";
import TableHeader from "@components/Dashboard/Table/TableHeader";
import TableCard from "@components/Dashboard/Table/TableCard";
import DashboardLayout from "@layouts/DashboardLayout";
import TableRow from "@components/Dashboard/Table/TableRow";
import ConfirmationModal from "@components/Dashboard/Modals/ConfirmationModal";
import AddElectionModal from "@components/Dashboard/Modals/AddElectionModal";

interface Election {
	id: number;
	title: string;
	startDate: string;
	endDate: string;
	year: string;
	status: string;
}

// ! Fix the previous button, to display the previous 10 pages only and the next button to display the next 10 pages only

const ElectionsPage: React.FC = () => {
	const [elections, setElections] = useState<Election[]>([]);
	const [filteredElections, setFilteredElections] = useState<Election[]>([]);
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectAllChecked, setSelectAllChecked] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const electionsPerPage = 10;
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
	const [sortCriteria, setSortCriteria] = useState<
		"title" | "startDate" | "endDate"
	>("title");
	const [filterStatus, setFilterStatus] = useState<
		"all" | "pending" | "active" | "done"
	>("all");

	// Function to load static data
	const loadStaticData = () => {
		const staticData: Election[] = [
			{
				id: 1,
				title: "Local Elections",
				startDate: "2022-05-15",
				endDate: "2025-05-17",
				year: calculateYear("2022-05-15", "2025-05-17"),
				status: calculateStatus("2022-05-15", "2025-05-17"),
			},
			{
				id: 2,
				title: "National Elections",
				startDate: "2021-05-15",
				endDate: "2022-05-17",
				year: calculateYear("2023-05-15", "2023-05-17"),
				status: calculateStatus("2023-05-15", "2023-05-17"),
			},
			{
				id: 3,
				title: "Special Elections",
				startDate: "2021-05-15",
				endDate: "2021-05-17",
				year: calculateYear("2021-05-15", "2021-05-17"),
				status: calculateStatus("2021-05-15", "2021-05-17"),
			},

			// Add other records here...
		];
		setElections(staticData);
		setFilteredElections(staticData);
		console.log("Static data loaded");
	};

	const calculateYear = (startDate: string, endDate: string): string => {
		const startYear = new Date(startDate).getFullYear();
		const endYear = new Date(endDate).getFullYear();

		return startYear === endYear
			? startYear.toString()
			: `${startYear} - ${endYear}`;
	};

	const calculateStatus = (startDate: string, endDate: string): string => {
		const now = new Date();
		const start = new Date(startDate);
		const end = new Date(endDate);

		// Set the time part to 00:00:00 to only compare the date part
		const nowDateOnly = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate()
		);
		const startDateOnly = new Date(
			start.getFullYear(),
			start.getMonth(),
			start.getDate()
		);
		const endDateOnly = new Date(
			end.getFullYear(),
			end.getMonth(),
			end.getDate()
		);

		if (nowDateOnly < startDateOnly) {
			return "pending";
		} else if (nowDateOnly > endDateOnly) {
			return "done";
		} else {
			return "active";
		}
	};

	useEffect(() => {
		// todo: Remove the static data function when you finish the development
		// Comment or uncomment the next line to toggle static data
		loadStaticData();

		// Fetch data from an API (uncomment to use dynamic data fetching)
		// const fetchElections = async () => {
		//     try {
		//         const response = await fetch('https://api.yourdomain.com/elections');
		//         const data = await response.json();
		//         setElections(data.map((election: any) => ({
		//             ...election,
		//             status: calculateStatus(election.startDate, election.endDate),
		//             year: calculateYear(election.startDate, election.endDate),
		//         })));
		//     } catch (error) {
		//         console.error('Failed to fetch elections:', error);
		//     }
		// };
		// fetchElections();
	}, []);

	const handleCheckboxChange = (electionId: number, checked: boolean) => {
		console.log("Checkbox change:", { electionId, checked });
		setSelectedRows((prev) =>
			checked ? [...prev, electionId] : prev.filter((id) => id !== electionId)
		);
	};

	const handleDeleteSelected = () => {
		console.log("Delete selected rows");
		setShowDeleteModal(true);
	};

	const confirmDelete = () => {
		console.log("Confirm delete");
		console.log("Selected rows before deletion:", selectedRows);
		// Filter out the elections that are not in the selectedRows array
		setElections((prevElections) =>
			prevElections.filter((election) => !selectedRows.includes(election.id))
		);
		setFilteredElections((prevElections) =>
			prevElections.filter((election) => !selectedRows.includes(election.id))
		);
		// Clear the selectedRows array after deletion
		setSelectedRows([]);
		setSelectAllChecked(false);
		setShowDeleteModal(false);
	};

	const cancelDelete = () => {
		console.log("Cancel delete");
		setShowDeleteModal(false);
	};

	const handleAddElection = () => {
		console.log("Open add election modal");
		setShowAddModal(true);
	};

	const addNewElection = (newElection: {
		title: string;
		startDate: string;
		endDate: string;
	}) => {
		console.log("Add new election:", newElection);
		const newId =
			elections.length > 0 ? Math.max(...elections.map((e) => e.id)) + 1 : 1;
		const election = {
			...newElection,
			id: newId,
			year: calculateYear(newElection.startDate, newElection.endDate),
			status: calculateStatus(newElection.startDate, newElection.endDate),
		};
		console.log("Adding new election with ID:", newId);
		setElections([...elections, election]);
		setFilteredElections([...elections, election]);
	};

	const handleSelectAll = (checked: boolean) => {
		console.log("Select all checked:", checked);
		if (checked) {
			const allElectionIds = filteredElections.map((election) => election.id);
			setSelectedRows(allElectionIds);
		} else {
			setSelectedRows([]);
		}
		setSelectAllChecked(checked);
	};

	const handleSort = (criteria: "title" | "startDate" | "endDate") => {
		console.log("Sorting by criteria:", criteria);
		const sortedElections = [...filteredElections].sort((a, b) => {
			if (criteria === "title") {
				return sortOrder === "asc"
					? a.title.localeCompare(b.title)
					: b.title.localeCompare(a.title);
			} else if (criteria === "startDate") {
				return sortOrder === "asc"
					? new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
					: new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
			} else {
				return sortOrder === "asc"
					? new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
					: new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
			}
		});
		setFilteredElections(sortedElections);
		setSortOrder(sortOrder === "asc" ? "desc" : "asc");
		console.log("Sorted elections:", sortedElections);
	};

	const handleFilter = (status: "all" | "pending" | "active" | "done") => {
		console.log("Filtering by status:", status);
		if (status === "all") {
			setFilteredElections(elections);
		} else {
			const filtered = elections.filter(
				(election) => election.status === status
			);
			setFilteredElections(filtered);
		}
		setFilterStatus(status);
		console.log("Filtered elections:", filteredElections);
	};

	const indexOfLastElection = currentPage * electionsPerPage;
	const indexOfFirstElection = indexOfLastElection - electionsPerPage;
	const currentElections = filteredElections.slice(
		indexOfFirstElection,
		indexOfLastElection
	);

	const totalPages = Math.ceil(filteredElections.length / electionsPerPage);

	const handlePrevPage = () => {
		console.log("Go to previous page");
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const handleNextPage = () => {
		console.log("Go to next page");
		if (currentPage < totalPages) setCurrentPage(currentPage + 1);
	};

	const sortButton = (
		<div className="dropdown me-2">
			<div
				className="d-flex justify-content-center align-items-center text-primary"
				id="dropdownSortButton"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				onClick={() => console.log("Sort dropdown button clicked")}
				style={{ cursor: "pointer" }}>
				<FontAwesomeIcon icon={faSort} />
				<span className="ms-2">
					{sortOrder === "asc" ? "Ascending" : "Descending"}
				</span>
			</div>
			<ul
				className="dropdown-menu"
				aria-labelledby="dropdownSortButton">
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Sort by title clicked");
							handleSort("title");
						}}>
						Alphabetically
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Sort by start date clicked");
							handleSort("startDate");
						}}>
						By Start Date
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Sort by end date clicked");
							handleSort("endDate");
						}}>
						By End Date
					</a>
				</li>
			</ul>
		</div>
	);

	const filterButton = (
		<div className="dropdown me-2">
			<div
				className="d-flex justify-content-center align-items-center text-primary"
				id="dropdownFilterButton"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				onClick={() => console.log("Filter dropdown button clicked")}
				style={{ cursor: "pointer" }}>
				<FontAwesomeIcon icon={faFilter} />
			</div>
			<ul
				className="dropdown-menu"
				aria-labelledby="dropdownFilterButton">
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Filter by all clicked");
							handleFilter("all");
						}}>
						All
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						href="javascript:;"
						onClick={() => {
							console.log("Filter by pending clicked");
							handleFilter("pending");
						}}>
						Pending
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						onClick={() => {
							console.log("Filter by active clicked");
							handleFilter("active");
						}}>
						Active
					</a>
				</li>
				<li>
					<a
						className="dropdown-item"
						onClick={() => {
							console.log("Filter by done clicked");
							handleFilter("done");
						}}>
						Done
					</a>
				</li>
			</ul>
		</div>
	);

	return (
		<DashboardLayout>
			<div className="container-fluid py-1">
				<TableCard
					headerTitle="Elections"
					onAddElection={handleAddElection}
					onDeleteSelected={handleDeleteSelected}
					isDeleteDisabled={selectedRows.length === 0}
					sortButton={sortButton}
					filterButton={filterButton}>
					<TableHeader
						columns={["Title", "Year", "Status", "Actions"]}
						onSelectAll={handleSelectAll}
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
								onCheckboxChange={handleCheckboxChange}
								checked={selectedRows.includes(election.id)}
							/>
						))}
					</tbody>
				</TableCard>
				<div className="row mt-3">
					<div className="col-12 d-flex justify-content-between">
						<button
							className="btn btn-primary"
							onClick={handlePrevPage}
							disabled={currentPage === 1}>
							Previous
						</button>
						<div>
							Page {currentPage} of {totalPages}
						</div>
						<button
							className="btn btn-primary"
							onClick={handleNextPage}
							disabled={currentPage === totalPages}>
							Next
						</button>
					</div>
				</div>
			</div>
			<ConfirmationModal
				show={showDeleteModal}
				title="Confirm Deletion"
				message="Are you sure you want to delete the selected elections?"
				onConfirm={confirmDelete}
				onCancel={cancelDelete}
			/>
			<AddElectionModal
				show={showAddModal}
				onClose={() => {
					console.log("Closing modal");
					setShowAddModal(false);
				}}
				onAddElection={addNewElection}
			/>
		</DashboardLayout>
	);
};

export default ElectionsPage;
