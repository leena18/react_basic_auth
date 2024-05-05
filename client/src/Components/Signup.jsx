import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          alert("User registered successfully");
          navigate("/login");
        } else {
          alert(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center bd-secondary vh-100">
      <div className="bg-info p-3 rounded w-50">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">
              <h3>Username: </h3>
            </label>
            <input
              type="text"
              placeholder="Enter User name"
              autoComplete="username"
              id="username"
              className="form-control rounded-0"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
            SignUp
          </button>
          <p>Already have an account? <Link to="/login">Login</Link></p> 
          {/* <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
