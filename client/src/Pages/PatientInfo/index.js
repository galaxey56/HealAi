import React, { useState } from "react";
import styles from "./patientinfo.module.css";
import { db } from "../../api/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";

export default function PatientInfo() {
  const [form, setForm] = useState({
    insurance_Meedicaid: 1,
    insurance_Medicare: 0,
    marital_status_MARRIED: 1,
    marital_status_SINGLE: 0,
    marital_status_WIDOWED: 0,
    religion_CATHOLIC: 1,
    religion_NOT_SPECIFIED: 0,
    religion_UNOBTAINABLE: 0,
    religion_PROTESTANT_QUAKER: 0,
    education_Graduate_degree: 1,
    education_Less_than_high_school: 0,
    education_Some_college: 0,
    education_Some_graduate_school: 0,
    employment_status: 1,
    food_stamps_Yes: 1,
    ethnicity_MINORITY: 1,
    ethnicity_WHITE: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const rawResponse = await fetch("http://localhost:8000/score/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();
    try {
      const docRef = await addDoc(collection(db, "patient"), {
        ...form,
        score: content.score,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log(content);
  };
  return (
    <div className={styles["cont"]}>
      <div className={styles["main-block"]}>
        <form onSubmit={handleSubmit}>
          <h1>Please Fill the Form</h1>
          <div className={styles["account-details"]}>
            <div>
              <label>Email*</label>
              <input
                type="text"
                name="email"
                required
                onChange={(e) => {
                  setForm({ ...form, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div>
              <label>Name*</label>
              <input
                type="text"
                name="name"
                required
                onChange={(e) => {
                  setForm({ ...form, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div>
              <label>Insurance*</label>
              <select
                required
                onChange={(e) => {
                  if (e.target.value === "Medicaid") {
                    setForm({
                      ...form,
                      insurance_Meedicaid: 1,
                      insurance_Medicare: 0,
                    });
                  } else if (e.target.value === "Medicare") {
                    setForm({
                      ...form,
                      insurance_Meedicaid: 0,
                      insurance_Medicare: 1,
                    });
                  }
                }}
              >
                <option
                  name="insurance_Meedicaid"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       insurance_Meedicaid: 1,
                  //       insurance_Medicare: 0,
                  //     });
                  //   }}
                >
                  Medicaid
                </option>
                <option
                  name="insurance_Medicare"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       insurance_Meedicaid: 0,
                  //       insurance_Medicare: 1,
                  //     });
                  //   }}
                >
                  Medicare
                </option>
              </select>
            </div>
            <div>
              <label>Martiatal Status*</label>
              <select
                required
                onChange={(e) => {
                  if (e.target.value === "Married") {
                    setForm({
                      ...form,
                      marital_status_MARRIED: 1,
                      marital_status_SINGLE: 0,
                      marital_status_WIDOWED: 0,
                    });
                  } else if (e.target.value === "Single") {
                    setForm({
                      ...form,
                      marital_status_MARRIED: 0,
                      marital_status_SINGLE: 1,
                      marital_status_WIDOWED: 0,
                    });
                  } else if (e.target.value === "Widowed") {
                    setForm({
                      ...form,
                      marital_status_MARRIED: 0,
                      marital_status_SINGLE: 0,
                      marital_status_WIDOWED: 1,
                    });
                  }
                }}
              >
                <option
                  name="marital_status_MARRIED"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       marital_status_MARRIED: 1,
                  //       marital_status_SINGLE: 0,
                  //       marital_status_WIDOWED: 0,
                  //     });
                  //   }}
                >
                  Married
                </option>
                <option
                  name="marital_status_SINGLE"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       marital_status_MARRIED: 0,
                  //       marital_status_SINGLE: 1,
                  //       marital_status_WIDOWED: 0,
                  //     });
                  //   }}
                >
                  Single
                </option>
                <option
                  name="marital_status_WIDOWED"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       marital_status_MARRIED: 0,
                  //       marital_status_SINGLE: 0,
                  //       marital_status_WIDOWED: 1,
                  //     });
                  //   }}
                >
                  Widowed
                </option>
              </select>
            </div>
            <div>
              <label>Religion*</label>
              <select
                required
                onChange={(e) => {
                  if (e.target.value === "Cattholic") {
                    setForm({
                      ...form,
                      religion_CATHOLIC: 1,
                      religion_NOT_SPECIFIED: 0,
                      religion_UNOBTAINABLE: 0,
                      religion_PROTESTANT_QUAKER: 0,
                    });
                  } else if (e.target.value === "Not specified") {
                    setForm({
                      ...form,
                      religion_CATHOLIC: 0,
                      religion_NOT_SPECIFIED: 1,
                      religion_UNOBTAINABLE: 0,
                      religion_PROTESTANT_QUAKER: 0,
                    });
                  } else if (e.target.value === "unobtainable") {
                    setForm({
                      ...form,
                      religion_CATHOLIC: 0,
                      religion_NOT_SPECIFIED: 0,
                      religion_UNOBTAINABLE: 1,
                      religion_PROTESTANT_QUAKER: 0,
                    });
                  } else if (e.target.value === "protestant quaker") {
                    setForm({
                      ...form,
                      religion_CATHOLIC: 0,
                      religion_NOT_SPECIFIED: 0,
                      religion_UNOBTAINABLE: 0,
                      religion_PROTESTANT_QUAKER: 1,
                    });
                  }
                }}
              >
                <option
                  name="religion_CATHOLIC"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       religion_CATHOLIC: 1,
                  //       religion_NOT_SPECIFIED: 0,
                  //       religion_UNOBTAINABLE: 0,
                  //       religion_PROTESTANT_QUAKER: 0,
                  //     });
                  //   }}
                >
                  Cattholic
                </option>
                <option
                  name="religion_NOT_SPECIFIED"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       religion_CATHOLIC: 0,
                  //       religion_NOT_SPECIFIED: 1,
                  //       religion_UNOBTAINABLE: 0,
                  //       religion_PROTESTANT_QUAKER: 0,
                  //     });
                  //   }}
                >
                  Not specified
                </option>
                <option
                  name="religion_UNOBTAINABLE"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       religion_CATHOLIC: 0,
                  //       religion_NOT_SPECIFIED: 0,
                  //       religion_UNOBTAINABLE: 1,
                  //       religion_PROTESTANT_QUAKER: 0,
                  //     });
                  //   }}
                >
                  unobtainable
                </option>
                <option
                  name="religion_PROTESTANT_QUAKER"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       religion_CATHOLIC: 0,
                  //       religion_NOT_SPECIFIED: 0,
                  //       religion_UNOBTAINABLE: 0,
                  //       religion_PROTESTANT_QUAKER: 1,
                  //     });
                  //   }}
                >
                  protestant quaker
                </option>
              </select>
            </div>
            <div>
              <label>Education*</label>
              <select
                required
                onChange={(e) => {
                  if (e.target.value === "Graduate Degree") {
                    setForm({
                      ...form,
                      education_Graduate_degree: 1,
                      education_Less_than_high_school: 0,
                      education_Some_college: 0,
                      education_Some_graduate_school: 0,
                    });
                  } else if (e.target.value === "Less than high School") {
                    setForm({
                      ...form,
                      education_Graduate_degree: 0,
                      education_Less_than_high_school: 1,
                      education_Some_college: 0,
                      education_Some_graduate_school: 0,
                    });
                  } else if (e.target.value === "Some College") {
                    setForm({
                      ...form,
                      education_Graduate_degree: 0,
                      education_Less_than_high_school: 0,
                      education_Some_college: 1,
                      education_Some_graduate_school: 0,
                    });
                  } else if (e.target.value === "Some graduate school") {
                    setForm({
                      ...form,
                      education_Graduate_degree: 0,
                      education_Less_than_high_school: 0,
                      education_Some_college: 0,
                      education_Some_graduate_school: 1,
                    });
                  }
                }}
              >
                <option
                  name="education_Graduate_degree"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       education_Graduate_degree: 1,
                  //       education_Less_than_high_school: 0,
                  //       education_Some_college: 0,
                  //       education_Some_graduate_school: 0,
                  //     });
                  //   }}
                >
                  Graduate Degree
                </option>
                <option
                  name="education_Less_than_high_school"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       education_Graduate_degree: 0,
                  //       education_Less_than_high_school: 1,
                  //       education_Some_college: 0,
                  //       education_Some_graduate_school: 0,
                  //     });
                  //   }}
                >
                  Less than high School
                </option>
                <option
                  name="education_Some_college"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       education_Graduate_degree: 0,
                  //       education_Less_than_high_school: 0,
                  //       education_Some_college: 1,
                  //       education_Some_graduate_school: 0,
                  //     });
                  //   }}
                >
                  Some College
                </option>
                <option
                  name="education_Some_graduate_school"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       education_Graduate_degree: 0,
                  //       education_Less_than_high_school: 0,
                  //       education_Some_college: 0,
                  //       education_Some_graduate_school: 1,
                  //     });
                  //   }}
                >
                  Some graduate school
                </option>
              </select>
            </div>
            <div>
              <label>Employment Status*</label>
              <select
                required
                onChange={(e) => {
                  if (e.target.value === "Yes") {
                    setForm({ ...form, employment_status: 1 });
                  } else if (e.target.value === "No") {
                    setForm({ ...form, employment_status: 0 });
                  }
                }}
              >
                <option
                  name="employment_status"
                  //   onSelect={(e) => {
                  //     setForm({ ...form, employment_status: 1 });
                  //   }}
                >
                  Yes
                </option>
                <option
                  name="employment_status"
                  //   onSelect={(e) => {
                  //     setForm({ ...form, employment_status: 0 });
                  //   }}
                >
                  No
                </option>
              </select>
            </div>
            <div>
              <label>Food Stamp*</label>
              <select
                required
                onChange={(e) => {
                  if (e.target.value === "Yes") {
                    setForm({ ...form, food_stamps_Yes: 1 });
                  } else if (e.target.value === "No") {
                    setForm({ ...form, food_stamps_Yes: 0 });
                  }
                }}
              >
                <option
                  name="food_stamps_Yes"
                  //   onSelect={(e) => {
                  //     setForm({ ...form, food_stamps_Yes: 1 });
                  //   }}
                >
                  Yes
                </option>
                <option
                  name="food_stamps_Yes"
                  //   onSelect={(e) => {
                  //     setForm({ ...form, food_stamps_Yes: 0 });
                  //   }}
                >
                  No
                </option>
              </select>
            </div>
            <div>
              <label>Ethnicity*</label>
              <select
                required
                onChange={(e) => {
                  if (e.target.value === "Minority") {
                    setForm({
                      ...form,
                      ethnicity_MINORITY: 1,
                      ethnicity_WHITE: 0,
                    });
                  } else if (e.target.value === "white") {
                    setForm({
                      ...form,
                      ethnicity_MINORITY: 0,
                      ethnicity_WHITE: 1,
                    });
                  }
                }}
              >
                <option
                  name="ethnicity_MINORITY"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       ethnicity_MINORITY: 1,
                  //       ethnicity_WHITE: 0,
                  //     });
                  //   }}
                >
                  Minority
                </option>
                <option
                  name="ethnicity_WHITE"
                  //   onSelect={(e) => {
                  //     setForm({
                  //       ...form,
                  //       ethnicity_MINORITY: 0,
                  //       ethnicity_WHITE: 1,
                  //     });
                  //   }}
                >
                  white
                </option>
              </select>
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
