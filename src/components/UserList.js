// src/components/UserList.js

import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">User List</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {user.name} - {user.email}
            </div>
            <div>
              <button className="btn btn-primary btn-sm me-2" onClick={() => onEdit(user)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
