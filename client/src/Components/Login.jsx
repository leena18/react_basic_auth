import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //function for submit
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/dashboard");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //function for forgot password
  // const handleForgotPassword = () => {
  //   navigate("/forgotpassword");
  // };
  return (
    <div className="d-flex justify-content-center align-items-center bd-secondary vh-100">
      <div className="bg-info p-3 rounded w-50">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <h3>Email: </h3>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="email"
              id="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <h3>Password: </h3>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              autoComplete="current-password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-secondary w-100 rounded-0">
            Login
          </button>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          <p>Forgotten your login details? <Link to="/forgotpassword"><b>Get help with logging in.</b></Link></p>
          {/* <button
  type="button"
  className="btn btn-secondary w-100 rounded-0"
  onClick={handleForgotPassword}
>
  Forgot Password
</button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;