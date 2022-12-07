import React, { useEffect, useState } from "react";
import {
	MdHome,
	MdLogout,
	MdAdd,
	MdTrackChanges,
	MdList,
	MdPersonPin,
} from "react-icons/md";
import logoText from "../../images/logo-text-light.jpg";
import "./dashboard.css";
import AddCoupon from "./component/AddCoupan";
import ListCoupan from "./component/ListCoupan";
import PriceTracker from "./component/PriceTracker";
import { db_listOfCoupons } from "../../db/database";
import { useLocation, useHistory } from "react-router-dom";

const Dashboard = (props) => {
	const [currentItem, setCurrentItem] = useState(2);

	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		
	});

	const routesoption = {
		1: <AddCoupon />,
		2: <ListCoupan />,
		3: <PriceTracker />,
	};

	const listOfCoupons = db_listOfCoupons;

	function currentItemHandler(data, event) {
		// setCurrentItem();
		setCurrentItem(data);
		console.log(data, event);
	}
	return (
		<div className="dashboard">
			<nav className="dashboard-navigation">
				<ul className="nav-header">
					<li>
						<MdHome />
						<span>Home</span>
					</li>
					<li>
						<img src={logoText} alt="logo" className="logoText-dashboard" />
					</li>
					<li>
						<ul className="nav-profile">
							<li>
								<MdPersonPin />
								<span>{location.state.username}</span>
							</li>
							<li
								onClick={() => {
									history.goBack();
									console.log(history);
								}}
							>
								<MdLogout />
								<span>Logout</span>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<div className="dashboard-body">
				<div className="dashboard-sidebar">
					<ul>
						<li
							className=""
							onClick={(event) => {
								currentItemHandler(1, event);
							}}
						>
							<MdAdd />
							<span>Add Coupons</span>
						</li>
						<li
							className=""
							onClick={() => {
								currentItemHandler(2);
							}}
						>
							<MdList />
							<span>List Coupans</span>
						</li>
						<li
							className=""
							onClick={() => {
								currentItemHandler(3);
							}}
						>
							<MdTrackChanges />
							<span>Price Tracker</span>
						</li>
					</ul>
				</div>
				<div className="dashboard-content">{routesoption[currentItem]}</div>
			</div>
		</div>
	);
};
export default Dashboard;
