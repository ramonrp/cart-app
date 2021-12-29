import { useCart } from "../../context/CartContext";

const CheckOut = () => {
  const { cart } = useCart();
  return <h1>Checkout!!</h1>;
};

export default CheckOut;
