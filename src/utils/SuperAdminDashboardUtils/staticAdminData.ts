import { Admin } from "@hooks/types";

export const loadStaticAdminData = (): Admin[] => {
	return [
		{
			id: 1,
			name: "John Doe",
			companyName: "Company A",
			email: "john.doe@example.com",
		},
		{
			id: 2,
			name: "Jane Smith",
			companyName: "Company B",
			email: "jane.smith@example.com",
		},
		{
			id: 3,
			name: "Alice Johnson",
			companyName: "Company C",
			email: "example@gmail.com",
		},
		{
			id: 4,
			name: "Bob Brown",
			companyName: "Company D",
			email: "example2@gmail.com",
		},
	];
};
