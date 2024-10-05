import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import axios from "axios";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Fetch existing users from the API when the component mounts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Set the users state with the fetched data
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleUserAdded = (user) => {
    setUsers([...users, user]);
  };

  const handleUserUpdated = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          {currentUser ? (
            <EditUser currentUser={currentUser} onUserUpdated={handleUserUpdated} />
          ) : (
            <AddUser onUserAdded={handleUserAdded} />
          )}
        </div>
        <div className="col-md-8">
          <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
