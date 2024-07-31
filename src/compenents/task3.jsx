import React, { useState } from "react";
import styles from "./task3.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={() => toggleAccordion(0)}>
        <h3>About Us</h3>
        <p>4 articles in this Topic</p>
        {activeIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <div className={styles.content}>
        <div className={styles.item} onClick={() => toggleAccordion(1)}>
          <p>
            How does Parkname separate itself from other domain name parking
            companies?
          </p>
          {activeIndex === 1 ? <FaAngleUp /> : <FaAngleDown />}
          {activeIndex === 1 && (
            <div className={styles.panel}>
              <p>Your domains are a valuable online property...</p>
            </div>
          )}
        </div>
        <div className={styles.item} onClick={() => toggleAccordion(2)}>
          <p>Is Parkname Parking actually free?</p>
          {activeIndex === 2 ? <FaAngleUp /> : <FaAngleDown />}
          {activeIndex === 2 && (
            <div className={styles.panel}>
              <p>Information about Parkname's free services...</p>
            </div>
          )}
        </div>
        <div className={styles.item} onClick={() => toggleAccordion(3)}>
          <p>What do you do?</p>
          {activeIndex === 3 ? <FaAngleUp /> : <FaAngleDown />}
          {activeIndex === 3 && (
            <div className={styles.panel}>
              <p>Details about what Parkname does...</p>
            </div>
          )}
        </div>
        <div className={styles.item} onClick={() => toggleAccordion(4)}>
          <p>When was Parkname first founded?</p>
          {activeIndex === 4 ? <FaAngleUp /> : <FaAngleDown />}
          {activeIndex === 4 && (
            <div className={styles.panel}>
              <p>Parkname was founded in...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
