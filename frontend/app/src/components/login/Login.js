import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { db_users } from "../../db/database";
import InputElements from "../form/InputElement";
import Notify from "../notification/Notify";
import "./login.css";
function Login(props) {
	const history = useHistory();
	const [authStatus, setAuthStatus] = useState({
		message: "",
		status: "",
	});

	const [formData, setformData] = useState({ username: "", password: "" });
	const inputHandler = (event) => {
		setformData({ ...formData, [event.target.name]: event.target.value });
	};
	const submitHandler = () => {
		const fetchUser = db_users.filter((user) => {
			return user.name === formData.username && user.pwd === formData.password;
		});

		if (fetchUser.length > 0) {
			setAuthStatus({
				message: "success",
				status: "success",
			});
			history.push({
				pathname: "/dashboard",
				state: formData,
			});
		} else {
			setAuthStatus({
				message: "Invalid Credentails, try again!",
				status: "failure",
			});
		}
	};
	return (
		<div className="login-container">
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
			<div className="login-label">
				<h3>Login here..</h3>
			</div>
			<InputElements
				label="Username"
				type="text"
				text="username"
				name="username"
				onChange={inputHandler}
				value={formData.username}
			/>
			<InputElements
				label="Password"
				type="password"
				text="password"
				name="password"
				onChange={inputHandler}
				value={formData.password}
			/>

			<InputElements type="Submit" value={"Login"} onClick={submitHandler} />

			<div className="links" onClick={props.setRegister}>
				<span>Register</span>
			</div>
		</div>
	);
}

export default Login;
