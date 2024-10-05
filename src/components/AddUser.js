// src/components/AddUser.js

import React, { useState } from "react";
import axios from "axios";

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/users", { name, email })
      .then((response) => {
        // Assuming the mock API returns the added user with an id
        onUserAdded({ ...response.data, id: Date.now() }); // Simulate an ID since jsonplaceholder doesn't return it
        setName("");  // Clear the input field after submission
        setEmail(""); // Clear the input field after submission
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add User</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          value={name}
          className="form-control mb-3"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          className="form-control mb-3"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success w-100">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
