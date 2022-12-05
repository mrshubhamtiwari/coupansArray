import React from "react";



  
import "./login.css";
function Login(props) {
	return (
		<div className="login-container">
			<div className="element-group-header">
				<h3>Login here..</h3>
				<span onClick={props.setStatus}>&times;</span>
			</div>
			<div className="element-group">
				<label>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-person-circle"
						viewBox="0 0 16 16"
					>
						<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
						<path
							fill-rule="evenodd"
							d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
						/>
					</svg>
					&nbsp; username
				</label>
				<input type="text" placeholder="username" className="" />
			</div>
			<div className="element-group">
				<label>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-lock-fill"
						viewBox="0 0 16 16"
					>
						<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
					</svg>
					&nbsp; password
				</label>
				<input type="password" placeholder="password" className="" />
			</div>
			<div className="element-group">
				<input type="submit" value={"Submit"} className="btn btn-success" />
				<input
					type="submit"
					value={"create an account"}
					className="btn"
					onClick={props.setRegister}
				/>
			</div>
		</div>
	);
}

export default Login;
