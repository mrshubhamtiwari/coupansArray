const date = new Date();
export const db_listOfCoupons = [
	{
		id: 1,
		brand: "Croma",
		label: "50% off on electronics",
		coupancode: "KHHAKJS-UIYI-NHJHJNKL-MLJL",
		addedDate:
			date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
		expiryDate:
			date.getDate() + 10 + "/" + date.getMonth() + "/" + date.getFullYear(),
		addedBy: "Shubham Tiwari",
		viewCount: 500,
		status: "Active",
		image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Croma_Logo.png",
	},
	{
		id: 2,
		brand: "Amazon",
		label: "50% off on electronics",
		coupancode: "KHHAKJS-UIYI-NHJHJNKL-MLJL",
		addedDate:
			date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
		expiryDate:
			date.getDate() + 10 + "/" + date.getMonth() + "/" + date.getFullYear(),
		addedBy: "Gautam Sharma",
		viewCount: 120,
		status: "Expired",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322",
	},
	{
		id: 3,
		brand: "Amazon",
		label: "50% off on electronics",

		coupancode: "KHHAKJS-UIYI-NHJHJNKL-MLJL",
		addedDate:
			date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
		expiryDate:
			date.getDate() + 10 + "/" + date.getMonth() + "/" + date.getFullYear(),
		addedBy: "Gautam Sharma",
		viewCount: 120,
		status: "Active",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322",
	},
];

export const db_users = [
	{
		id: 1,
		name: "Shubham",
		pwd: "12345",
	},
	{
		id: 2,
		name: "Anirudha",
		pwd: "12345",
	},
	{
		id: 3,
		name: "Gautam",
		pwd: "12345",
	},
];
