import React, { useState } from "react";
import './App.css'

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!formData.name) {
      alert("Name is required!");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address!");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    alert("Form submitted successfully!");
    // You can now proceed with form submission logic, like sending data to an API.
  };

  return (
    <div className="container">
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
        />
        <button
          type="submit"
          style={{ padding: "10px", background: "blue", color: "white", border: "none", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
