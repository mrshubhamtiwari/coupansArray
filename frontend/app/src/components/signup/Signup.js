import React from "react";
import InputElements from "../form/InputElement";

import "./signup.css";
function Signup(props) {
	return (
		<div className="signup-container">
			<div className="signup-label">
				<h3>Register</h3>
			</div>
			<InputElements label="Username" type="text" text="create username" />
			<InputElements label="Password" type="text" text="create password" />
			<InputElements type="Submit" value={"Register"} />

			<div className="links" onClick={props.setLogin}>
				<span>Sign-in</span>
			</div>
		</div>
	);
}

export default Signup;
