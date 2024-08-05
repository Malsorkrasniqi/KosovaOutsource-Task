import React, { useEffect, useState } from "react";
import styles from "./task1.module.css";
import data from "../data.json";
import { FcAbout } from "react-icons/fc";

// I don't have much time left for me to import the icons
// <FcAbout />
const icons = {
  "dot-com": "🌐",
  "ruler": "📏",
  "globe": "🌍",
  "recognition": "🏅",
  "magnifier": "🔍",
  "megaphone": "📣",
  "sales": "💼",
  "typo": "✏️",
  "bulb": "🧮",
};

const DomainCriteria = () => {
  const [criteria, setCriteria] = useState([]);
  console.log(criteria);
  useEffect(() => {
    setCriteria(data);
  }, []);

  return (
    console.log("sa her po "),
    (
      <div className={styles.container}>
        {/* Container maib */}
        {criteria.map((item, index) => (
          // Cart e itemas
          <div key={index} className={styles.item}>
            <div className={styles.leftSide}>
              <div className={styles.icon}>{icons[item.icon]}</div>
            </div>

            <div className={styles.rightSide}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default DomainCriteria;

// Finall
