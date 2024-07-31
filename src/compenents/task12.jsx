// src/Card.js
import React from "react";
import styles from "./task12.module.css";
import image from "../assets/image.jpg";

const Card = ({
  version,
  date,
  type,
  author,
  description,
  bgColor,
  authorImage,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.version}>{version}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.part1}>
        <span className={styles.type} style={{ backgroundColor: bgColor }}>
          {type}
        </span>
        <img src={image} alt={`${author}`} className={styles.authorImage} />
        <span className={styles.author}>{author}</span>
      </div>
        <p className={styles.description}>{description}</p>
      
      <button className={styles.downloadBtn}>Download</button>
    </div>
  );
};

export default Card;
