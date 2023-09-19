import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => Object => HTML(DOM)

// React Element :-

const head = (
  <h1 id="h1" key={"h2"}>
    Namate React
  </h1>
);
const container = [head];

// Components :-




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
