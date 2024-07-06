// adminUtils.ts
import { Admin } from "@hooks/types";

/**
 * Updates the selected rows based on the checkbox change event.
 * @param {number} adminId - The ID of the admin.
 * @param {boolean} checked - The checked state of the checkbox.
 * @param {React.Dispatch<React.SetStateAction<number[]>>} setSelectedRows - The state setter for selected rows.
 */
export const handleCheckboxChange = (
	adminId: number,
	checked: boolean,
	setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>
) => {
	console.log("Checkbox change:", { adminId, checked });
	setSelectedRows((prev) =>
		checked ? prev.concat(adminId) : prev.filter((id) => id !== adminId)
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
 * Confirms the deletion of selected rows and updates the admin lists.
 * @param {number[]} selectedRows - The IDs of the selected rows.
 * @param {React.Dispatch<React.SetStateAction<Admin[]>>} setAdmins - The state setter for admins.
 * @param {React.Dispatch<React.SetStateAction<Admin[]>>} setFilteredAdmins - The state setter for filtered admins.
 * @param {React.Dispatch<React.SetStateAction<number[]>>} setSelectedRows - The state setter for selected rows.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setSelectAllChecked - The state setter for the select all checkbox.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setShowDeleteModal - The state setter for showing the delete modal.
 */
export const confirmDelete = (
	selectedRows: number[],
	setAdmins: React.Dispatch<React.SetStateAction<Admin[]>>,
	setFilteredAdmins: React.Dispatch<React.SetStateAction<Admin[]>>,
	setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>,
	setSelectAllChecked: React.Dispatch<React.SetStateAction<boolean>>,
	setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
	console.log("Confirm delete");
	setAdmins((prevAdmins) =>
		prevAdmins.filter((admin) => !selectedRows.includes(admin.id))
	);
	setFilteredAdmins((prevAdmins) =>
		prevAdmins.filter((admin) => !selectedRows.includes(admin.id))
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
 * Opens the add admin modal.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setShowAddModal - The state setter for showing the add modal.
 */
export const handleAddAdmin = (
	setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
	console.log("Open add admin modal");
	setShowAddModal(true);
};

/**
 * Adds a new admin to the admin list.
 * @param {{ name: string; companyName: string; email: string }} newAdmin - The new admin details.
 * @param {Admin[]} admins - The current list of admins.
 * @param {React.Dispatch<React.SetStateAction<Admin[]>>} setAdmins - The state setter for admins.
 * @param {React.Dispatch<React.SetStateAction<Admin[]>>} setFilteredAdmins - The state setter for filtered admins.
 */
export const addNewAdmin = (
	newAdmin: { name: string; companyName: string; email: string },
	admins: Admin[],
	setAdmins: React.Dispatch<React.SetStateAction<Admin[]>>,
	setFilteredAdmins: React.Dispatch<React.SetStateAction<Admin[]>>
) => {
	console.log("Add new admin:", newAdmin);
	const newId =
		admins.length > 0 ? Math.max(...admins.map((e) => e.id)) + 1 : 1;
	const admin = {
		...newAdmin,
		id: newId,
	};
	console.log("Adding new admin with ID:", newId);
	setAdmins([...admins, admin]);
	setFilteredAdmins([...admins, admin]);
};

/**
 * Selects or deselects all admins based on the checked state.
 * @param {boolean} checked - The checked state of the select all checkbox.
 * @param {Admin[]} filteredAdmins - The current list of filtered admins.
 * @param {React.Dispatch<React.SetStateAction<number[]>>} setSelectedRows - The state setter for selected rows.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setSelectAllChecked - The state setter for the select all checkbox.
 */
export const handleSelectAll = (
	checked: boolean,
	filteredAdmins: Admin[],
	setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>,
	setSelectAllChecked: React.Dispatch<React.SetStateAction<boolean>>
) => {
	console.log("Select all checked:", checked);
	if (checked) {
		const allAdminIds = filteredAdmins.map((admin) => admin.id);
		setSelectedRows(allAdminIds);
	} else {
		setSelectedRows([]);
	}
	setSelectAllChecked(checked);
};

/**
 * Sorts the admins based on the specified criteria and order.
 * @param {"name" | "companyName" | "email"} criteria - The criteria to sort by.
 * @param {Admin[]} filteredAdmins - The current list of filtered admins.
 * @param {React.Dispatch<React.SetStateAction<Admin[]>>} setFilteredAdmins - The state setter for filtered admins.
 * @param {"asc" | "desc"} sortOrder - The current sort order.
 * @param {React.Dispatch<React.SetStateAction<"asc" | "desc">>} setSortOrder - The state setter for sort order.
 */
export const handleSort = (
	criteria: "name" | "companyName" | "email",
	filteredAdmins: Admin[],
	setFilteredAdmins: React.Dispatch<React.SetStateAction<Admin[]>>,
	sortOrder: "asc" | "desc",
	setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>
) => {
	console.log("Sorting by criteria:", criteria);
	const sortedAdmins = [...filteredAdmins].sort((a, b) => {
		if (criteria === "name") {
			return sortOrder === "asc"
				? a.name.localeCompare(b.name)
				: b.name.localeCompare(a.name);
		} else if (criteria === "companyName") {
			return sortOrder === "asc"
				? a.companyName.localeCompare(b.companyName)
				: b.companyName.localeCompare(a.companyName);
		} else {
			return sortOrder === "asc"
				? a.email.localeCompare(b.email)
				: b.email.localeCompare(a.email);
		}
	});
	setFilteredAdmins(sortedAdmins);
	setSortOrder(sortOrder === "asc" ? "desc" : "asc");
	console.log("Sorted admins:", sortedAdmins);
};

/**
 * Filters the admins based on the specified status.
 * @param {"all" | "pending" | "active" | "done"} status - The filter status.
 * @param {Admin[]} admins - The current list of admins.
 * @param {React.Dispatch<React.SetStateAction<Admin[]>>} setFilteredAdmins - The state setter for filtered admins.
 * @param {React.Dispatch<React.SetStateAction<"all" | "pending" | "active" | "done">>} setFilterStatus - The state setter for filter status.
 */
export const handleFilter = (
	status: "all" | "pending" | "active" | "done",
	admins: Admin[],
	setFilteredAdmins: React.Dispatch<React.SetStateAction<Admin[]>>,
	setFilterStatus: React.Dispatch<
		React.SetStateAction<"all" | "pending" | "active" | "done">
	>
) => {
	console.log("Filtering by status:", status);
	if (status === "all") {
		setFilteredAdmins(admins);
	} else {
		const filtered = admins.filter((admin) => admin.status === status);
		console.log("Filtered admins:", filtered);
		setFilteredAdmins(filtered);
	}
	setFilterStatus(status);
};

/**
 * Handles the pagination logic for the admins table.
 *
 * @param {number} currentPage - The current page number.
 * @param {number} adminsPerPage - The number of admins to display per page.
 * @param {Admin[]} filteredAdmins - The current list of filtered admins.
 * @param {React.Dispatch<React.SetStateAction<number>>} setCurrentPage - The state setter for the current page.
 *
 * This function calculates the index of the last admin and the index of the first admin
 * to determine the admins to display on the current page. It also calculates the total number of pages.
 *
 * The function returns the current admins to be displayed, the total number of pages, and handlers for
 * navigating to the previous and next pages.
 *
 * @returns {object} An object containing:
 * - currentAdmins: The admins to display on the current page.
 * - totalPages: The total number of pages.
 * - handlePrevPage: A function to navigate to the previous page.
 * - handleNextPage: A function to navigate to the next page.
 */
export const handlePagination = (
	currentPage: number,
	adminsPerPage: number = 10,
	filteredAdmins: Admin[],
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
	let indexOfLastAdmin = currentPage * adminsPerPage;

	let indexOfFirstAdmin = indexOfLastAdmin - adminsPerPage;

	const currentAdmins = filteredAdmins.slice(
		indexOfFirstAdmin,
		indexOfLastAdmin
	);

	const totalPages = Math.ceil(filteredAdmins.length / adminsPerPage);

	const handlePrevPage = () => {
		console.log("Go to previous page");
		if (currentPage > 1) {
			indexOfFirstAdmin = indexOfFirstAdmin - adminsPerPage;
			indexOfLastAdmin = indexOfLastAdmin - adminsPerPage;
			console.log("Previous page:", indexOfFirstAdmin, indexOfLastAdmin);
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		console.log("Go to next page");
		if (currentPage < totalPages) {
			indexOfFirstAdmin = indexOfFirstAdmin + adminsPerPage;
			indexOfLastAdmin = indexOfLastAdmin + adminsPerPage;
			console.log("Next page:", indexOfFirstAdmin, indexOfLastAdmin);
			setCurrentPage(currentPage + 1);
		}
	};

	return { currentAdmins, totalPages, handlePrevPage, handleNextPage };
};
