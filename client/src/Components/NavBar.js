import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "../api/firebase";

const NavBar = () => {
  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("successful logout");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <div className={styles.item}>
          <Link to="/home" className={styles.link}>
            Home
          </Link>
        </div>
        <div className={styles.item}>
          <Link to="/dashboard" className={styles.link}>
            DashBoard
          </Link>
        </div>
        <div>
          <button
            className={styles.item}
            id={styles.logout}
            onClick={handleClick}
          >
            Logout
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
