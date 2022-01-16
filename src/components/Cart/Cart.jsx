import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { X } from "react-feather";
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
      <button className={styles.closeButton} onClick={onDismiss}>
        <X />
      </button>
      <h2>Cart</h2>
      {CartItems}
      <div className={styles.buttonGroup}>
        {cart.length > 0 && (
          <Button color="primary" onClick={handleEmptyCart}>
            Delete All
          </Button>
        )}
        {cart.length > 0 && (
          <Button
            component={Link}
            color="secondary"
            onClick={onDismiss}
            to="/checkout"
          >
            Checkout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cart;
