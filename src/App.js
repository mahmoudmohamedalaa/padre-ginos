import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

// const Pizza = (props) => {
//   return React.createElement("div", null, [
//     React.createElement("h1", null, props.name),
//     React.createElement("p", null, props.description),
//   ]);
// };
const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pizza Pepperoni",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Pizza Margherita",
      description: "Fresh Mozzarella, Basil, Olive Oil",
    }),
    React.createElement(Pizza, {
      name: "Pizza Funghi",
      description: "Mozzarella, Mushrooms",
    }),
    React.createElement(Pizza, {
      name: "Pizza Quattro Stagioni",
      description: "Mozzarella, Artichokes, Ham, Mushrooms, Olives",
    }),
    React.createElement(Pizza, {
      name: "Pizza Bianca",
      description: "Mozzarella, Ricotta, Garlic, Olive Oil",
    }),
  ]);
};
const container  = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
