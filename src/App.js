import "./styles.css";
import Counter from "./components/Counter";
import React from "react";
// import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = React.useState("");

  const handelChange = (e) => {
    // console.log(e.target.value)
    const { value } = e.target;
    setQuery(value);
    console.log(value);
  };

  // console.log(handelChange)

  return (
    <div className="App">
      <div className="container">
        <input
          className="num-input"
          value={query}
          onChange={handelChange}
          type="text"
          placeholder="Enter Initial Number"
        />
        <Counter initialNum={0} />
      </div>
    </div>
  );
}

//  const { useState } = React;

// function App() {
//   const [text, setText] = useState("");
//   const [submitted, setSubmitted] = useState("");

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     setSubmitted(text);
//     setText("");
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={text} onChange={handleChange} />
//         {/* <input type="submit" value="add" /> */}
//       </form>
//       submitted: {submitted}
//       <Counter initialNum={0} />
//     </div>
//   );
// }

// export default App;
