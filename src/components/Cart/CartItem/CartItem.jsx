import { useCart } from "../../../context/CartContext";
import styles from "./cartItem.module.css";
const CartItem = ({ pictureUrl, title, selected, id }) => {
  const { handleClick } = useCart();
  return (
    <article className={styles.cartItem}>
      <div>
        <img src={pictureUrl} alt={title}></img>
      </div>
      <p>{title}</p>
      <button onClick={() => handleClick(id)}>Delete</button>
    </article>
  );
};

export default CartItem;
