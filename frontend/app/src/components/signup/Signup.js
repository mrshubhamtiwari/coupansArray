import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { db_users } from "../../db/database";
import InputElements from "../form/InputElement";
import Notify from "../notification/Notify";

import "./signup.css";
function Signup(props) {
	const history = useHistory();
	const [authStatus, setAuthStatus] = useState({
		message: "",
		status: "",
	});

	const [formData, setformData] = useState({
		name: "",
		pwd: "",
		cpwd: "",
	});
	const inputHandler = (event) => {
		setformData({ ...formData, [event.target.name]: event.target.value });
	};
	const submitHandler = () => {
		const fetchUser = db_users.filter((user) => {
			return user.name === formData.name;
		});
		console.log(fetchUser);
		if (fetchUser.length > 0) {
			setAuthStatus({
				message: "User already exist",
				status: "warning",
			});
			return;
		}

		if (formData.pwd === formData.cpwd && formData.pwd != "") {
			setAuthStatus({
				message: "User Account Created!",
				status: "success",
			});
		} else {
			setAuthStatus({
				message: "Invalid Entry or Password Does not match",
				status: "failure",
			});
		}
		setformData({ name: "", pwd: "", cpwd: "" });
	};
	return (
		<div className="signup-container">
			<Notify />
			<div className="signup-label">
				<h3>Register</h3>
			</div>
			<Notify
				status={authStatus.status}
				resetNotify={() => {
					setAuthStatus({
						message: "",
						status: "",
					});
				}}
			>
				{authStatus.message}
			</Notify>
			<InputElements
				label="Username"
				type="text"
				text="create username"
				name="name"
				onChange={inputHandler}
				value={formData.name}
			/>
			<InputElements
				label="Password"
				type="password"
				text="create password"
				name="pwd"
				onChange={inputHandler}
				value={formData.pwd}
			/>

			<InputElements
				label="Confirm Password"
				type="password"
				text="confirm password"
				name="cpwd"
				onChange={inputHandler}
				value={formData.cpwd}
			/>
			<InputElements type="Submit" value={"Register"} onClick={submitHandler} />

			<div className="links" onClick={props.setLogin}>
				<span>Sign-in</span>
			</div>
		</div>
	);
}

export default Signup;
