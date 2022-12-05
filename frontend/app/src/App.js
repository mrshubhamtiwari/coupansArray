import React, { useState } from "react";
import "./App.css";
import "./coupons.css";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

import logo from "./images/logo-light.png";
import logoText from "./images/logo-text-light.jpg";
import Card from "./components/card/Card";
import Sidebar from "./components/sidebar/Sidebar";
import Search from "./components/search/Search";
import Backdrop from "./components/backdrop/Backdrop";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";

const brands = [
	{ type: "fashion", name: "nike", id: 1 },
	{ type: "online", name: "Amazon", id: 2 },
	{ type: "online", name: "Flipkart", id: 3 },
	{ type: "online", name: "Nyka", id: 4 },
	{ type: "online", name: "Croma", id: 5 },
];
const category = {
	1: "Electronics",
	2: "Foods & Beverages",
	3: "Clothings",
	4: "Beauty products",
	5: "Online Stores",
};

const date = new Date();

const coupans = [
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

function App() {
	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false);
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						{login ? (
							<Backdrop
								closeBackdrop={() => {
									setLogin(!login);
								}}
							>
								<Login
									setRegister={() => {
										if (!register) setRegister(!register);
										else setLogin(false);
									}}
								/>
							</Backdrop>
						) : (
							""
						)}
						{register ? (
							<Backdrop
								closeBackdrop={() => {
									setRegister(!register);
								}}
							>
								<Signup
									setLogin={() => {
										if (!login) setLogin(!login);
										else setRegister(!register);
									}}
								/>
							</Backdrop>
						) : (
							""
						)}

						<header className="header">
							<div>
								<img src={logo} alt="logo" className="logo" />
							</div>
							<div>
								<img src={logoText} alt="logo" className="logoText" />
							</div>
							{/* SignIn */}
							<div>
								<button
									className="btn btn-secondry"
									onClick={() => {
										setLogin(true);
									}}
								>
									SignIn
								</button>
							</div>
							{/* SignUp */}
							<div>
								<button
									className="btn btn-secondry"
									onClick={() => {
										setRegister(true);
									}}
								>
									Register
								</button>
							</div>
						</header>
						<section className="content-body">
							<div className="search-body">
								<Search />
								{/* <div className="filters">
										<div>
											<Category />
										</div>
										<div>
											<Brands brands={brands} />
										</div>
									</div> */}
							</div>
							<div className="content">
								{coupans.map((coupan) => (
									<Card coupan={coupan} key={coupan.id} />
								))}
							</div>
							<div></div>
							<div className="sidebar p-4">
								<Sidebar brands={brands} category={category} />
							</div>
						</section>
					</Route>
					<Route path="/dashboard" exact>
						<Dashboard />
					</Route>
					<Route path={""}></Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
