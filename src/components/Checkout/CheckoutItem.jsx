import styles from "./checkoutitem.module.css";
const CheckoutItem = ({ pictureUrl, title, price }) => {
  return (
    <li className={styles.wrapper}>
      <p>{title}</p>
      <p>{price}€</p>
    </li>
  );
};

export default CheckoutItem;
