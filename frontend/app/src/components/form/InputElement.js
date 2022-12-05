import React from "react";
import "./inputStyle.css";
function InputElements({ label, type, text, value, linkText }) {
	return (
		<>
			<div className="input-group">
				<label>
					{label}
					<input type={type} placeholder={text} />
				</label>
			</div>
		</>
	);
}
export default InputElements;
