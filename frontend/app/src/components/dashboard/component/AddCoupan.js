import React, { useState } from "react";
import InputElements from "../../form/InputElement";

export default function AddCoupan() {
	var date = new Date();

	const [formData, setFormData] = useState({
		brand: "",
		couponcode: "",
		label: "",
		addedDate:
			date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
		expireDate:
			date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
		addedby: "",
		views: 0,
		status: "active",
	});
	const columns = [
		{
			placeholder: "brand",
			type: "text",
			name: "brand",
			value: formData.brand,
		},
		{
			placeholder: "label",
			type: "text",
			name: "label",
			value: formData.label,
		},
		{
			placeholder: "code",
			type: "text",
			name: "couponcode",
			value: formData.code,
		},
		{
			type: "date",
			name: "addedDate",
			value: formData.addedDate,
		},
		{
			type: "date",
			name: "expireDate",
			value: formData.expireDate,
		},
		{
			placeholder: "Added By",
			type: "text",
			name: "addedby",
			value: formData.addedby,
		},
		{
			placeholder: "Views",
			type: "Number",
			name: "views",
			value: formData.views,
		},
		{
			placeholder: "status",
			type: "text",
			name: "status",
			value: formData.status,
		},
	];

	function inputChangeHandler(event) {
		setFormData({ ...formData, [event.target.name]: event.target.value });
		console.log(formData);
	}
	return (
		<div>
			{columns.map((element) => (
				<InputElements
					name={element.name}
					value={element.value}
					type={element.type}
					text={element.placeholder}
					onChange={inputChangeHandler}
				/>
			))}
		</div>
	);
}
