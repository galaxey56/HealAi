import React from "react";
import styles from "./Score.module.css";
import { PieChart, Pie, Cell } from "recharts";
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "UwU",
    value: 2600,
  },
];
const colors = ["#f00", "#fff", "#00f", "#fff", "#0f0", "#fff"];

const Score = (props) => {
  return (
    <div className={styles.container}>
      <h2>Social Score</h2>
      <div className={styles.scores}>
        {props.currUser.details.score.map((score, index) => {
          let scoreMapping = [
            {
              name: "TSS",
              value: score.value,
            },
            {
              name: "notTSS",
              value: 1000 - score.value,
            },
          ];
          return (
            <div className={styles.each}>
              <PieChart width={300} height={250}>
                <Pie
                  data={scoreMapping}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  label
                  startAngle={90}
                  endAngle={450}
                  activeIndex={0}
                >
                  {data02.map((val, ind) => {
                    return <Cell key={ind} fill={colors[ind + 2 * index]} />;
                  })}
                </Pie>
              </PieChart>
              <h4>{score.type} </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Score;
