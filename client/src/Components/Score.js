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
        {props.currUser.score && (
          <div className={styles.each}>
            <PieChart width={300} height={250}>
              <Pie
                data={[
                  {
                    name: "TSS",
                    value: Math.floor(props.currUser.score),
                  },
                  {
                    name: "notTSS",
                    value: 100 - Math.floor(props.currUser.score),
                  },
                ]}
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
                  return <Cell key={ind} fill={colors[ind]} />;
                })}
              </Pie>
            </PieChart>
            <h4>Total Social Score </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Score;
