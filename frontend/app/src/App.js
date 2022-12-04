import React from "react";
import "./App.css";
import "./coupons.css";

import logo from "./images/logo-light.png";
import logoText from "./images/logo-text-light.jpg";
import Card from "./components/card/Card";
import Sidebar from "./components/sidebar/Sidebar";
import Search from "./components/search/Search";

const category = [
	"Electronics",
	"Foods & Beverages",
	"Clothings",
	"Beauty products",
	"Online Stores",
];
const brands = [
	{ type: "fashion", name: "nike" },
	{ type: "online", name: "Amazon" },
	{ type: "online", name: "Flipkart" },
	{ type: "online", name: "Nyka" },
	{ type: "online", name: "Croma" },
];

const date = new Date();

const coupans = [
	{
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
];

function App() {
	return (
		<>
			<header className="header">
				<div>
					<img src={logo} alt="logo" className="logo" />
				</div>
				<div>
					<img src={logoText} alt="logo" className="logoText" />
				</div>
				<div>
					<button className="btn btn-secondry">SignIn</button>
				</div>
			</header>
			<section className="content-body">
				<div className="search-body">
					<Search />
				</div>
				<div className="content">
					{coupans.map((coupan) => (
						<Card coupan={coupan} />
					))}
				</div>
				<div></div>
				<div className="sidebar p-4">
					<Sidebar category={category} brands={brands} />
				</div>
			</section>
		</>
	);
}

export default App;
