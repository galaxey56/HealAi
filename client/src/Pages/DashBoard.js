import React from "react";
import Score from "../Components/Score";
import Side from "../Components/Side";
import styles from "./DashBoard.module.css";
import { useState } from "react";
import ContentItems from "../Components/ContentItems";

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
      ]
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

  return (
    <>
      <div className={styles.container}>
        <Side patients={DUMMY_LIST} changeUser = {setUser} active={user}/>
        <div className={styles.l}>
          <Score currUser={DUMMY_LIST[user]} />
          <div>
            <ContentItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
