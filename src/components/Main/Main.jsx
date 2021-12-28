import { CartProvider } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import Gallery from "../Gallery/Gallery";
import styles from "./main.module.css";
const Main = () => {
  return (
    <main>
      <CartProvider>
        <Gallery />
        <Cart />
      </CartProvider>
    </main>
  );
};

export default Main;
