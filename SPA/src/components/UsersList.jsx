import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/UsersList.module.css";
import { fetchUsers } from "../api";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div className={styles.usersList}>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}/albums`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
