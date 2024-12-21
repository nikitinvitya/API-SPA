import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404 - Page not found</h1>
      <Link to="/users">Back to users</Link>
    </div>
  );
}

export default NotFound;
