import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Namaste React"
);

const head = (
  <h1 id="h1" key={"h2"}>
    Hello world
  </h1>
);
const container = [heading1, head];
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
