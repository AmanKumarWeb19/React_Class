import React from "react";
import ReactDOM from "react-dom/client";


// const AppLayout = () => {
//   return {
//     /**
//      * Header
//      *    -Logo
//      *    -Nav-List(Right Side)
//      *    -Cart
//      * Body
//      *    -Search Bar
//      *    -Resturant Card
//      *            -Image
//      *            -Name
//      *            -Rating
//      *            -Cusisine
//      *    -
//      * Footer
//      *     -Links
//      *     -CopyRight
//      */
//   };
// };


// JSX => React.createElement => Object => HTML(DOM)

// React Element :-

const head = (
  <h1 id="h1" key={"h2"}>
    Food Villa
  </h1>
);
const container = [head];

const HeaderComponent = () => {
  return (
    <div>
      {head}
      <h2>Namaste React Functional Component</h2>
      <h2>This is h2 Tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);


