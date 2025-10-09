import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name=" Pepperoni"
        description="pep, chesse"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name=" Hawaiian"
        description="ham, pinapple"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name=" Veggie"
        description="mushrooms, peppers, onions"
        image="/public/pizzas/big_meat.webp"
      />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
