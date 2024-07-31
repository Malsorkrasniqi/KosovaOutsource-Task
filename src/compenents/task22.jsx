import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./task22.module.css"; // Import CSS module

const ToggleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleOpen} className={styles.toggleButton}>
        Why park a domain name in Parkname ?
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={styles.icon}
        />
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>
            Parkname is the leading industry standard for domain name parking
            and monetization services. We offer a wide variety of services to
            help you achieve success.
          </p>
        </div>
      )}
    </div>
  );
};

export default ToggleComponent;
