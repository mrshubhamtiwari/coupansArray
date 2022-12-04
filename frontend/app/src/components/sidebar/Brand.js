import React from "react";
const Brands = ({ brands }) => {
	return (
		<>
			<button className="select-label">Select</button>
			<ul className="select">
				{brands.map((val) => (
					<li className="options">{val.name}</li>
				))}
			</ul>
		</>
	);
};
export default Brands;
