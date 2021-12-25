import React, { useState } from "react";
import "./counter.css";

export default function Counter({ initialNum }) {
  // console.log(initialNum);
  const [count, setCount] = useState(initialNum);

  const changeCount = (value) => {
    setCount((prev) => {
      if (prev > 1000) {
        return 0;
      }

      if (value === "*") {
        return prev * 2;
      } else {
        return prev + value;
      }
    });
  };

  return (
    <div className="counter-div">
      <h1> Counter </h1>
      <h1>{count}</h1>
      <div>
        <button onClick={() => changeCount(1)}> + 1</button>
        <button onClick={() => changeCount(-1)}> - 1</button>
        <button onClick={() => changeCount("*")}> 2X</button>
        <div className="text">
          {" "}
          Counter value is {count % 2 === 0 ? "Even" : "Odd"}{" "}
        </div>
      </div>
    </div>
  );
}
