import React from "react";
import "./search.css";
function Search() {
	return (
		<div className="search">
			<h4>search here..</h4>
			<div className="search-area">
				<input type="text" placeholder="input text" className="form-control" />
				<button className="btn btn-danger">Search</button>
			</div>
		</div>
	);
}
export default Search;
