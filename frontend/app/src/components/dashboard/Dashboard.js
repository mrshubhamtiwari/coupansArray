import React from "react";
import {
	MdHome,
	MdLogout,
	MdAdd,
	MdTrackChanges,
	MdList,
} from "react-icons/md";
import "./dashboard.css";
const Dashboard = () => {
	return (
		<div className="dashboard">
			<nav className="dashboard-navigation">
				<ul>
					<li>
						<MdHome />
						<span>Home</span>
					</li>
					<li>
						<MdLogout />
						<span>Logout</span>
					</li>
				</ul>
			</nav>
			<div className="dashboard-body">
				<div className="dashboard-sidebar">
					<ul>
						<li>
							<MdAdd />
							<span>Add Coupons</span>
						</li>
						<li>
							<MdList />
							<span>List Coupans</span>
						</li>
						<li>
							<MdTrackChanges />
							<span>Price Tracker</span>
						</li>
					</ul>
				</div>
				<div className="dashboard-content"></div>
			</div>
		</div>
	);
};
export default Dashboard;
