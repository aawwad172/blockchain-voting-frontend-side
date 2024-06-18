import { Election } from "@hooks/useFetchElections"; // Assuming Election interface is defined in useFetchElections.ts
import { calculateYear, calculateStatus } from "@utils/shared/helpers";

/**
 * Updates the selected rows based on the checkbox change event.
 * @param {number} electionId - The ID of the election.
 * @param {boolean} checked - The checked state of the checkbox.
 * @param {React.Dispatch<React.SetStateAction<number[]>>} setSelectedRows - The state setter for selected rows.
 */
export const handleCheckboxChange = (
	electionId: number,
	checked: boolean,
	setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>
) => {
	console.log("Checkbox change:", { electionId, checked });
	setSelectedRows((prev) =>
		checked ? prev.concat(electionId) : prev.filter((id) => id !== electionId)
	);
};

/**
 * Opens the delete confirmation modal.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setShowDeleteModal - The state setter for showing the delete modal.
 */
export const handleDeleteSelected = (
	setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
	console.log("Delete selected rows");
	setShowDeleteModal(true);
};

/**
 * Confirms the deletion of selected rows and updates the election lists.
 * @param {number[]} selectedRows - The IDs of the selected rows.
 * @param {React.Dispatch<React.SetStateAction<Election[]>>} setElections - The state setter for elections.
 * @param {React.Dispatch<React.SetStateAction<Election[]>>} setFilteredElections - The state setter for filtered elections.
 * @param {React.Dispatch<React.SetStateAction<number[]>>} setSelectedRows - The state setter for selected rows.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setSelectAllChecked - The state setter for the select all checkbox.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setShowDeleteModal - The state setter for showing the delete modal.
 */
export const confirmDelete = (
	selectedRows: number[],
	setElections: React.Dispatch<React.SetStateAction<Election[]>>,
	setFilteredElections: React.Dispatch<React.SetStateAction<Election[]>>,
	setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>,
	setSelectAllChecked: React.Dispatch<React.SetStateAction<boolean>>,
	setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
	console.log("Confirm delete");
	setElections((prevElections) =>
		prevElections.filter((election) => !selectedRows.includes(election.id))
	);
	setFilteredElections((prevElections) =>
		prevElections.filter((election) => !selectedRows.includes(election.id))
	);
	setSelectedRows([]);
	setSelectAllChecked(false);
	setShowDeleteModal(false);
};

/**
 * Cancels the delete operation and closes the delete confirmation modal.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setShowDeleteModal - The state setter for showing the delete modal.
 */
export const cancelDelete = (
	setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
	console.log("Cancel delete");
	setShowDeleteModal(false);
};

/**
 * Opens the add election modal.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setShowAddModal - The state setter for showing the add modal.
 */
export const handleAddElection = (
	setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
	console.log("Open add election modal");
	setShowAddModal(true);
};

/**
 * Adds a new election to the election list.
 * @param {{ title: string; startDate: string; endDate: string }} newElection - The new election details.
 * @param {Election[]} elections - The current list of elections.
 * @param {React.Dispatch<React.SetStateAction<Election[]>>} setElections - The state setter for elections.
 * @param {React.Dispatch<React.SetStateAction<Election[]>>} setFilteredElections - The state setter for filtered elections.
 */
export const addNewElection = (
	newElection: { title: string; startDate: string; endDate: string },
	elections: Election[],
	setElections: React.Dispatch<React.SetStateAction<Election[]>>,
	setFilteredElections: React.Dispatch<React.SetStateAction<Election[]>>
) => {
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

/**
 * Selects or deselects all elections based on the checked state.
 * @param {boolean} checked - The checked state of the select all checkbox.
 * @param {Election[]} filteredElections - The current list of filtered elections.
 * @param {React.Dispatch<React.SetStateAction<number[]>>} setSelectedRows - The state setter for selected rows.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setSelectAllChecked - The state setter for the select all checkbox.
 */
export const handleSelectAll = (
	checked: boolean,
	filteredElections: Election[],
	setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>,
	setSelectAllChecked: React.Dispatch<React.SetStateAction<boolean>>
) => {
	console.log("Select all checked:", checked);
	if (checked) {
		const allElectionIds = filteredElections.map((election) => election.id);
		setSelectedRows(allElectionIds);
	} else {
		setSelectedRows([]);
	}
	setSelectAllChecked(checked);
};

/**
 * Sorts the elections based on the specified criteria and order.
 * @param {"title" | "startDate" | "endDate"} criteria - The criteria to sort by.
 * @param {Election[]} filteredElections - The current list of filtered elections.
 * @param {React.Dispatch<React.SetStateAction<Election[]>>} setFilteredElections - The state setter for filtered elections.
 * @param {"asc" | "desc"} sortOrder - The current sort order.
 * @param {React.Dispatch<React.SetStateAction<"asc" | "desc">>} setSortOrder - The state setter for sort order.
 */
export const handleSort = (
	criteria: "title" | "startDate" | "endDate",
	filteredElections: Election[],
	setFilteredElections: React.Dispatch<React.SetStateAction<Election[]>>,
	sortOrder: "asc" | "desc",
	setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>
) => {
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

/**
 * Filters the elections based on the specified status.
 * @param {"all" | "pending" | "active" | "done"} status - The filter status.
 * @param {Election[]} elections - The current list of elections.
 * @param {React.Dispatch<React.SetStateAction<Election[]>>} setFilteredElections - The state setter for filtered elections.
 * @param {React.Dispatch<React.SetStateAction<"all" | "pending" | "active" | "done">>} setFilterStatus - The state setter for filter status.
 */
export const handleFilter = (
	status: "all" | "pending" | "active" | "done",
	elections: Election[],
	setFilteredElections: React.Dispatch<React.SetStateAction<Election[]>>,
	setFilterStatus: React.Dispatch<
		React.SetStateAction<"all" | "pending" | "active" | "done">
	>
) => {
	console.log("Filtering by status:", status);
	if (status === "all") {
		setFilteredElections(elections);
	} else {
		const filtered = elections.filter((election) => election.status === status);
		console.log("Filtered elections:", filtered);
		setFilteredElections(filtered);
	}
	setFilterStatus(status);
};

/**
 * Handles the pagination logic for the elections table.
 *
 * @param {number} currentPage - The current page number.
 * @param {number} electionsPerPage - The number of elections to display per page.
 * @param {Election[]} filteredElections - The current list of filtered elections.
 * @param {React.Dispatch<React.SetStateAction<number>>} setCurrentPage - The state setter for the current page.
 *
 * This function calculates the index of the last election and the index of the first election
 * to determine the elections to display on the current page. It also calculates the total number of pages.
 *
 * The function returns the current elections to be displayed, the total number of pages, and handlers for
 * navigating to the previous and next pages.
 *
 * @returns {object} An object containing:
 * - currentElections: The elections to display on the current page.
 * - totalPages: The total number of pages.
 * - handlePrevPage: A function to navigate to the previous page.
 * - handleNextPage: A function to navigate to the next page.
 */
export const handlePagination = (
	currentPage: number,
	electionsPerPage: number = 10,
	filteredElections: Election[],
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
	let indexOfLastElection = currentPage * electionsPerPage;

	let indexOfFirstElection = indexOfLastElection - electionsPerPage;

	const currentElections = filteredElections.slice(
		indexOfFirstElection,
		indexOfLastElection
	);

	const totalPages = Math.ceil(filteredElections.length / electionsPerPage);

	const handlePrevPage = () => {
		console.log("Go to previous page");
		if (currentPage > 1) {
			indexOfFirstElection = indexOfFirstElection - electionsPerPage;
			indexOfLastElection = indexOfLastElection - electionsPerPage;
			console.log("Previous page:", indexOfFirstElection, indexOfLastElection);
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		console.log("Go to next page");
		if (currentPage < totalPages) {
			indexOfFirstElection = indexOfFirstElection + electionsPerPage;
			indexOfLastElection = indexOfLastElection + electionsPerPage;
			console.log("Next page:", indexOfFirstElection, indexOfLastElection);
			setCurrentPage(currentPage + 1);
		}
	};

	return { currentElections, totalPages, handlePrevPage, handleNextPage };
};
