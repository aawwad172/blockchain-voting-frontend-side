// staticAdminData.ts
import { Admin } from "@hooks/types";

export const loadStaticAdminData = (): Admin[] => {
	return [
		{
			id: 1,
			name: "John Doe",
			companyName: "Tech Corp",
			email: "john.doe@techcorp.com",
		},
		{
			id: 2,
			name: "Jane Smith",
			companyName: "Health Inc",
			email: "jane.smith@healthinc.com",
		},
		{
			id: 3,
			name: "Alice Johnson",
			companyName: "Finance LLC",
			email: "alice.johnson@financellc.com",
		},
		{
			id: 4,
			name: "Bob Brown",
			companyName: "Retail Co",
			email: "bob.brown@retailco.com",
		},
		{
			id: 5,
			name: "Charlie Davis",
			companyName: "Logistics Ltd",
			email: "charlie.davis@logisticsltd.com",
		},
	];
};
