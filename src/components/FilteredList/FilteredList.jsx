import { useCart } from "../../context/CartContext";
const FilteredList = ({ searchTerm }) => {
  const { cart } = useCart();
  let filteredCart = cart;
  if (searchTerm) {
    filteredCart = cart.filter((item) => item.category === searchTerm);
  }
  console.log(filteredCart);
  return <h3>FilteredList {searchTerm}</h3>;
};

export default FilteredList;
