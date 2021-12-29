import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "../Cart/CartItem/CartItem";
import { imgData } from "../../data/imgData";
import styles from "./cart.module.css";
const Cart = ({ onDismiss }) => {
  const { cart, handleEmptyCart } = useCart();
  let filteredCart = imgData.filter((item) => cart.includes(item.id));
  const CartItems = filteredCart.map((item) => (
    <CartItem key={item.id} {...item} />
  ));

  return (
    <div>
      <h2>Cart</h2>
      {CartItems}
      <div className={styles.buttonGroup}>
        {cart.length > 0 && (
          <button onClick={handleEmptyCart}>Delete All</button>
        )}
        {cart.length > 0 && (
          <Link onClick={onDismiss} to="/checkout">
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
