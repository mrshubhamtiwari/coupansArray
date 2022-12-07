import React from "react";
import { db_listOfCoupons } from "../../../db/database";
import Card from "../../card/Card";

export default function ListCoupan() {
	const dbCoupons = db_listOfCoupons;
	return (
		<div>
			{dbCoupons.map((coupan) => (
				
				<Card coupan={coupan} key={coupan.id} />
			))}
		</div>
	);
}
