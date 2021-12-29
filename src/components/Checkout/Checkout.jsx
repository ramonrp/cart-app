import { useCart } from "../../context/CartContext";
import { imgData } from "../../data/imgData";
import CheckoutItem from "./CheckoutItem";
import styles from "./checkout.module.css";
const CheckOut = () => {
  const { cart } = useCart();
  let filteredCart = imgData.filter((item) => cart.includes(item.id));
  const total = filteredCart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  const CheckoutItems = filteredCart.map((item) => (
    <CheckoutItem key={item.id} {...item} />
  ));
  return (
    <div>
      <ol>{CheckoutItems}</ol>
      <p className={styles.total}>
        Total price <span>{total}€</span>
      </p>
    </div>
  );
};

export default CheckOut;
