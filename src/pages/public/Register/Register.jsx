import { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    phone: "",
    department: "",
    programme: "",
    level: "",
    semester: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted!");

    console.log("Submit button clicked!");
    console.log(formData);
  };

  return (
    <div className="register-page">
      <div className="register-container">

        {/* Left Section */}
        <div className="register-left">
          <h1>🎓 ExamSphere</h1>
          <h2>Create Your Student Account</h2>

          <p>
            Join ExamSphere to take online examinations,
            track your academic progress, and access results
            securely anytime.
          </p>
        </div>

        {/* Right Section */}
        <div className="register-right">
          <h2>Student Registration</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="studentId"
                placeholder="Student ID"
                value={formData.studentId}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
              />

              <input
                type="text"
                name="programme"
                placeholder="Programme"
                value={formData.programme}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="">Select Level</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
              </select>

              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
              >
                <option value="">Select Semester</option>
                <option value="First Semester">First Semester</option>
                <option value="Second Semester">Second Semester</option>
              </select>
            </div>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <div className="checkbox">
              <input type="checkbox" />
              <span>I agree to the Terms & Conditions</span>
            </div>

            <button type="submit">
              Create Account
            </button>

            <p className="login-link">
              Already have an account? <span>Login</span>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Register;