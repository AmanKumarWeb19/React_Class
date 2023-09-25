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

const Title = () => (
  <h1 id="h1" key={"h2"}>
    Food Villa
  </h1>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return {};
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
