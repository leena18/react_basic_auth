import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/forgotpassword", {
      email,
    })
      .then((response) => {
        if (response.data.status) {
          alert("Password reset link sent to your email");
          navigate("/login");
        } else {
          alert("Invalid email");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bd-secondary vh-100">
      <div className="bg-info p-3 rounded w-50">
        <h2>Forgot Password</h2>
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
          <button type="submit" className="btn btn-secondary w-100 rounded-0">
            Send Reset Link
          </button>
          <p>Go back to <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;