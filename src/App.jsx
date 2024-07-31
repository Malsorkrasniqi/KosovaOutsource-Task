import React from "react";
import Task11 from "./compenents/task1";
import Task12 from "./compenents/task12";
import Task21 from "./compenents/task21";
import Task22 from "./compenents/task22";
import Task3 from "./compenents/task3";
import "../src/index.css";
import Data2 from "./data2.json";

function App() {
  return (
    <>
      <Task11 />

      <div className="App">
        <div className="container">
          {Data2.map((card, index) => (
            <Task12 key={index} {...card} />
          ))}
        </div>
      </div>

      <Task21 />
      <Task22 />
      <Task3 />
    </>
  );
}

export default App;
