import React from "react";
import Score from "../Components/Score";
import Side from "../Components/Side";
import styles from "./DashBoard.module.css";
import { useState, useEffect } from "react";
import ContentItems from "../Components/ContentItems";
import { db } from "../api/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";

const DUMMY_LIST = [
  {
    id: 1,
    name: "Avinash Bhojanpalli",
    details: {
      score: [
        {
          type: "Critical Score",
          value: 300,
        },
        {
          type: "Total Social Score",
          value: 800,
        },
        {
          type: "Positive Score",
          value: 700,
        },
      ],
    },
  },
  {
    id: 2,
    name: "Aritro Ghosh",
    details: {
      score: [
        {
          type: "Critical Score",
          value: 400,
        },
        {
          type: "Total Social Score",
          value: 900,
        },
        {
          type: "Positive Score",
          value: 800,
        },
      ],
    },
  },
  {
    id: 3,
    name: "Satya Patnala",
    details: {
      score: [
        {
          type: "Critical Score",
          value: 500,
        },
        {
          type: "Total Social Score",
          value: 950,
        },
        {
          type: "Positive Score",
          value: 600,
        },
      ],
    },
  },
];

const DashBoard = () => {
  const [user, setUser] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const patientdata = collection(db, "patient");
      const patientSnapshot = await getDocs(patientdata);
      // console.log(patientSnapshot.docs);
      setData((prev) => []);
      patientSnapshot.docs.map((doc) =>
        setData((prev) => [...prev, doc.data()])
      );
    };
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <div className={styles.container}>
        <Side patients={data} changeUser={setUser} active={user} />
        <div className={styles.l}>
          {data.length && <Score currUser={data[user]} />}
          <div>{data.length && <ContentItems currUser={data[user]} />}</div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
