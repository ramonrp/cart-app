import { useCart } from "../../context/CartContext";
import CartItem from "../Cart/CartItem/CartItem";
const Cart = () => {
  const { cart } = useCart();
  let filteredCart = cart.filter((item) => item.selected);

  const CartItems = filteredCart.map((item) => (
    <CartItem key={item.id} {...item} />
  ));

  return (
    <div>
      <h2>Cart</h2>
      {CartItems}
    </div>
  );
};

export default Cart;
