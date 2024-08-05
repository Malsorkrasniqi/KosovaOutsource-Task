import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./task3.module.css";
import image from "../assets/image.jpg";

const component = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggleExpanded}>
        <div className={styles.headerText}>
          <div className={styles.part1}>
            <img src={image} className={styles.image} />
          </div>

          <div className={styles.part2}>
            <h2>About Us</h2>
            <p>4 articles in this Topic</p>
          </div>
        </div>
        <FontAwesomeIcon icon={expanded ? faAngleUp : faAngleDown} />
      </div>
      {expanded && (
        <div className={styles.content}>
          <div className={styles.question} onClick={() => toggleSection(1)}>
            <div className={styles.questionPart1}>
              <h3>
                How does Parkname separate itself from other domain name parking
                companies?
              </h3>
              <FontAwesomeIcon
                icon={expandedSection === 1 ? faAngleUp : faAngleDown}
              />
            </div>
            {expandedSection === 1 && (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident dolorum voluptates eos enim nesciunt fugiat ad
                excepturi unde impedit deleniti?
              </p>
            )}
          </div>
          <div className={styles.question} onClick={() => toggleSection(2)}>
            <div className={styles.questionPart1}>
              <h3>Is Parkname Parking actually free?</h3>
              <FontAwesomeIcon
                icon={expandedSection === 2 ? faAngleUp : faAngleDown}
              />
            </div>
            {expandedSection === 2 && (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident dolorum voluptates eos enim nesciunt fugiat ad
                excepturi unde impedit deleniti?
              </p>
            )}
          </div>
          <div className={styles.question} onClick={() => toggleSection(3)}>
            <div className={styles.questionPart1}>
              <h3>What you do?</h3>
              <FontAwesomeIcon
                icon={expandedSection === 3 ? faAngleUp : faAngleDown}
              />
            </div>
            {expandedSection === 3 && (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident dolorum voluptates eos enim nesciunt fugiat ad
                excepturi unde impedit deleniti?
              </p>
            )}
          </div>
          <div className={styles.question} onClick={() => toggleSection(4)}>
            <div className={styles.questionPart1}>
              <h3>When was Parkname first founded?</h3>
              <FontAwesomeIcon
                icon={expandedSection === 4 ? faAngleUp : faAngleDown}
              />
            </div>
            {expandedSection === 4 && (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident dolorum voluptates eos enim nesciunt fugiat ad
                excepturi unde impedit deleniti?
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default component;

// final
