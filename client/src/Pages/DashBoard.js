import React from "react";
import Side from "../Components/Side";
import styles from "./DashBoard.module.css";

const DashBoard = () => {
  return (
    <div className={styles.container}>
      <Side />
    </div>
  );
};

export default DashBoard;
