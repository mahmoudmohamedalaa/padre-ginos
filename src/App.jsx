import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
    <h1>Padre Gino's - Order Now</h1>
    <Pizza name=" Pepperoni" description="pep, chesse"/>
    <Pizza name=" Hawaiian" description="ham, pinapple"/>
    <Pizza name=" Veggie" description="mushrooms, peppers, onions"/>
    </div>
    
  )
};
const container  = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
