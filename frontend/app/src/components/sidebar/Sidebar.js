import React from "react";
import Search from "../search/Search";
import Brands from "./Brand";
import Category from "./Category";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = ({ category, brands }) => {
	return (
		<>
			<div className="search-body-sidebar">
				<Search />
			</div>
			<div className="category">
				<h4>category</h4>
				<Category category={category} />
			</div>
			<div className="brands">
				<h4>brands</h4>
				<Brands brands={brands} />
			</div>
		</>
	);
};
export default Sidebar;
