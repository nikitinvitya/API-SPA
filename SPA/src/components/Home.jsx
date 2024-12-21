import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to SPA!</h1>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Home;
