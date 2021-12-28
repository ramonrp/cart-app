import { useCart } from "../../../context/CartContext";
const CartItem = ({ pictureUrl, title, selected, id }) => {
  const { handleChange } = useCart();
  return (
    <article>
      <div>
        <img src={pictureUrl} alt={title}></img>
      </div>
      <p>{title}</p>
      <button onClick={() => handleChange(id)}>Delete from cart</button>
    </article>
  );
};

export default CartItem;
