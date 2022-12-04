import React from "react";
const Category = ({ category }) => {
	return (
		<>
			<button className="select-label">Select</button>
			<ul className="select">
				{category.map((val) => (
					<li className="options" value={val}>
						{val}
					</li>
				))}
			</ul>
		</>
	);
};
export default Category;
