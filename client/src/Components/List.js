import React from "react";
import styles from "./Side.module.css";

const List = (props) => {
  return (
    <div className={styles.container}>
      <h3>Patients</h3>
      <ul>
        {props.patients.map((patient, index) => {
          const onClick = () => {
            props.change(index)
          }
          const active = props.active === index? styles.active: '';
          return (
            <li className={`${styles.patient} ${active}`} key={patient.id} onClick={onClick}>
              {patient.name}
            </li>
          );
        })}
      </ul>
      
    </div>
  );
};

export default List;
