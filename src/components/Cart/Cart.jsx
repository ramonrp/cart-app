import { useCart } from "../../context/CartContext";
import CartItem from "../Cart/CartItem/CartItem";
import { imgData } from "../../data/imgData";
const Cart = () => {
  const { cart } = useCart();
  let filteredCart = imgData.filter((item) => cart.includes(item.id));

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
