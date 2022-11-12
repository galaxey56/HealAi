import React from "react";
import Profile from "./Profile";
import List from "./List";
import styles from "./Side.module.css";

const Side = (props) => {
  return (
    <div className={styles.side}>
      <Profile />
      <List patients={props.patients} change={props.changeUser} active={props.active}/>
    </div>
  );
};

export default Side;
