import React from "react";
import { useState } from "react";
import "./brand.css";
const Brands = ({ brands }) => {
	const [status, setStatus] = useState("select-brands");
	function onSelectClickHandler() {
		if (status === "select-brands") setStatus("select-brands active");
		else setStatus("select-brands");
	}

	function onClickHandler(event) {
		if (event.target.style.backgroundColor === "") {
			event.target.style.backgroundColor = "#f73f42";
			event.target.style.color = "#ffffff";
		} else {
			event.target.style.backgroundColor = "";
			event.target.style.color = "";
		}
	}
	return (
		<div className="brand-container">
			<button className="select-label" onClick={onSelectClickHandler}>
				Select Brands
			</button>
			<ul className={status}>
				{brands.map((val) => (
					<li className="options" onClick={onClickHandler} key={val.id}>
						{val.name}
					</li>
				))}
			</ul>
		</div>
	);
};
export default Brands;
