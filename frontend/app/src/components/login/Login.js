import React from "react";

import "./login.css";
function Login(props) {
  return (
    <div className="login-container">
      <form>
        <label for="Username">Username : </label>
        <input type="text" placeholder="Enter Username" required />
        <label for="Password">Password : </label>
        <input type="password" placeholder="Enter Password" required />
        <button type="submit" value="Submit" className="btn btn-danger">
          {" "}
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
