import { useCart } from "../../../context/CartContext";
const CartItem = ({ pictureUrl, title, selected, id }) => {
  const { handleClick } = useCart();
  return (
    <article>
      <div>
        <img src={pictureUrl} alt={title}></img>
      </div>
      <p>{title}</p>
      <button onClick={() => handleClick(id)}>Delete from cart</button>
    </article>
  );
};

export default CartItem;
