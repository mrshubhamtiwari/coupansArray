import React from "react";

import "./inputStyle.css";
function InputElements({ label, type, text, onChange, onClick, name, value }) {
	return (
		<>
			<div className="input-group">
				<label>
					{label}
					<input
						type={type}
						placeholder={text}
						onChange={onChange}
						name={name}
						onClick={onClick}
						value={value}
					/>
				</label>
			</div>
		</>
	);
}
export default InputElements;
