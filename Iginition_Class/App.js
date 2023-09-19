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

// 1. Functional Component
// 2. Class Based Component

// 1. Functional Component:-

const HeaderComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
