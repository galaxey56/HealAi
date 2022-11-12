import React from "react";
import styles from "./ContentItems.module.css";

const ContentItems = ({ currUser }) => {
  // console.log(props);
  return (
    <div className={styles.card}>
      <h5>Name: {currUser.name}</h5>
      <h5>Email: {currUser.email}</h5>
      {currUser.education_Graduate_degree === 1 && (
        <h5>Education: Graduate Degree</h5>
      )}
      {currUser.education_Less_than_high_school === 1 && (
        <h5>Education: Less Than High School</h5>
      )}
      {currUser.education_Some_college === 1 && (
        <h5>Education: Some College</h5>
      )}
      {currUser.education_Some_graduate_school === 1 && (
        <h5>Education: Some Graduate School</h5>
      )}
      {currUser.employment_status === 1 ? (
        <h5>Employed: Yes</h5>
      ) : (
        <h5>Employed: No</h5>
      )}
      {currUser.food_stamps_Yes === 1 ? <h5>SNAP: Yes</h5> : <h5>SNAP: No</h5>}
      {currUser.insurance_Medicare === 1 && <h5>Insurance Status: Medicare</h5>}
      {currUser.insurance_Meedicaid === 1 && (
        <h5>Insurance Status: Medicaid</h5>
      )}
      {currUser.marital_status_MARRIED === 1 && (
        <h5>Marital Status: Married</h5>
      )}
      {currUser.marital_status_SINGLE === 1 && <h5>Marital Status: Single</h5>}
      {currUser.marital_status_WIDOWED === 1 && (
        <h5>Marital Status: Widowed</h5>
      )}
      {currUser.religion_CATHOLIC === 1 && <h5>Religion: Catholic</h5>}
      {currUser.religion_NOT_SPECIFIED === 1 && (
        <h5>Religion: Not specified</h5>
      )}
      {currUser.religion_PROTESTANT_QUAKER === 1 && (
        <h5>Religion: Protestant Quaker</h5>
      )}
      {currUser.religion_UNOBTAINABLE === 1 && <h5>Religion: none</h5>}
    </div>
  );
};

export default ContentItems;
