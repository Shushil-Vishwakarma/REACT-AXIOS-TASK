// src/components/EditUser.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const EditUser = ({ currentUser, onUserUpdated }) => {
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://jsonplaceholder.typicode.com/users/${currentUser.id}`, { name, email })
      .then((response) => {
        onUserUpdated(response.data);
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Edit User</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          value={name}
          className="form-control mb-3"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
