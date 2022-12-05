import React from "react";
import InputElements from "../form/InputElement";
import "./login.css";
function Login(props) {
	return (
		<div className="login-container">
			<div className="login-label">
				<h3>Login here..</h3>
			</div>
			<InputElements label="Username" type="text" text="username" />
			<InputElements label="Password" type="text" text="password" />
			<InputElements type="Submit" value={"Login"} />

			<div className="links" onClick={props.setRegister}>
				<span>Register</span>
			</div>
		</div>
	);
}

export default Login;
