import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./task21.module.css";

const data = {
  Domains: [
    { name: ".COM", price: "$5.99/yr", oldPrice: "$10.99/yr" },
    { name: ".AI", price: "$55.99/yr", oldPrice: "$10.99/yr" },
    { name: ".NET", price: "$7.99/yr", oldPrice: "$10.99/yr" },
    { name: ".HEALTH", price: "$9.99/yr", oldPrice: "$13.99/yr" },
  ],
  "Web Hosting": [
    { name: "Basic Plan", price: "$3.99/mo", oldPrice: "$5.99/mo" },
    { name: "Standard Plan", price: "$5.99/mo", oldPrice: "$8.99/mo" },
    { name: "Premium Plan", price: "$7.99/mo", oldPrice: "$12.99/mo" },
    { name: "Premium Plan", price: "$9.99/mo", oldPrice: "$13.99/mo" },
  ],
  "Dedicated Servers": [
    { name: "Entry Server", price: "$70/mo", oldPrice: "$100/mo" },
    { name: "Professional Server", price: "$150/mo", oldPrice: "$200/mo" },
    { name: "Enterprise Server", price: "$300/mo", oldPrice: "$400/mo" },
    { name: "Enterprise Server", price: "$500/mo", oldPrice: "$600/mo" },
  ],
  "Virtual Cloud Servers": [
    { name: "Starter VPS", price: "$10/mo", oldPrice: "$15/mo" },
    { name: "Business VPS", price: "$20/mo", oldPrice: "$30/mo" },
    { name: "Enterprise VPS", price: "$40/mo", oldPrice: "$60/mo" },
    { name: "Enterprise VPS", price: "$70/mo", oldPrice: "$70/mo" },
  ],
  "WordPress Hosting": [
    { name: "Basic WP", price: "$2.99/mo", oldPrice: "$4.99/mo" },
    { name: "Standard WP", price: "$4.99/mo", oldPrice: "$7.99/mo" },
    { name: "Premium WP", price: "$6.99/mo", oldPrice: "$10.99/mo" },
    { name: "Premium WP", price: "$7.99/mo", oldPrice: "$13.99/mo" },
  ],
  "Email Hosting": [
    { name: "Personal Email", price: "$1.99/mo", oldPrice: "$3.99/mo" },
    { name: "Business Email", price: "$3.99/mo", oldPrice: "$6.99/mo" },
    { name: "Enterprise Email", price: "$6.99/mo", oldPrice: "$9.99/mo" },
    { name: "Enterprise Email", price: "$7.99/mo", oldPrice: "$9.99/mo" },
  ],
  "VPS Hosting Servers": [
    { name: "VPS Plan 1", price: "$5/mo", oldPrice: "$8/mo" },
    { name: "VPS Plan 2", price: "$10/mo", oldPrice: "$15/mo" },
    { name: "VPS Plan 3", price: "$20/mo", oldPrice: "$30/mo" },
    { name: "VPS Plan 4", price: "$20/mo", oldPrice: "$30/mo" },
  ],
  "Free Hosting": [{ name: "Free Plan", price: "$0/mo", oldPrice: "$0/mo" }],
};

const TabContent = ({ items }) => (
  <div className={styles.cards}>
    {items.map((item, index) => (
      <div key={index} className={styles.card}>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>Instead of {item.oldPrice}</p>
        <button>Buy Now</button>
      </div>
    ))}
  </div>
);

const Task21 = () => (
  <Tabs>
    <TabList className={styles["react-tabs__tab-list"]}>
      {Object.keys(data).map((tab) => (
        <Tab
          key={tab}
          className={styles["react-tabs__tab"]}
          selectedClassName={styles["react-tabs__tab--selected"]}
        >
          {tab}
        </Tab>
      ))}
    </TabList>

    {Object.keys(data).map((tab) => (
      <TabPanel key={tab}>
        <TabContent items={data[tab]} />
      </TabPanel>
    ))}
  </Tabs>
);

export default Task21;
