import React from "react";
import ReactDOM from "react-dom";
import "./backdrop.css";
function Backdrop(props) {
	return ReactDOM.createPortal(
		<div className="backdrop" onClick={props.setStatus}>
			{props.children}
		</div>,
		document.getElementById("modal")
	);
}

export default Backdrop;
