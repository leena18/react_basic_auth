import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// export default Signup;

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await Axios.post("http://localhost:3000/auth/signup", values);
      if (response.data.status) {
        alert("User registered successfully");
        navigate("/login");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bd-secondary vh-100">
      <div className="bg-info p-5 rounded w-50">
        <h2 className="text-center mb-4">Register</h2>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold">
                  Username:
                </label>
                <Field name="username" type="text" className="form-control" id="username" />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email:
                </label>
                <Field name="email" type="email" className="form-control" id="email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Password:
                </label>
                <Field name="password" type="password" className="form-control" id="password" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-secondary w-100 fw-bold" disabled={isSubmitting}>
                Sign Up
              </button>
              <p className="text-center mt-3">
                Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;

Signup.css = `
.form-control {
  height: 45px;
  border-radius: 0;
  border: 1px solid #ced4da;
  box-shadow: none;
  font-size: 16px;
}

.form-control:focus {
  border-color: #80bdff;
      box-shadow: none;
    }

    .form-label {
      font-size: 14px;
      color: #333;
      font-weight: bold;
    }

    .btn-secondary {
      background-color: #007bff;
      border-color: #007bff;
      font-size: 16;
    }
    `
