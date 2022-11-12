import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <div className={styles.item}>
          <Link to="/home" className={styles.link}>Home</Link>
        </div>
        <div className={styles.item}>
          <Link to="/dashboard" className={styles.link}>DashBoard</Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
