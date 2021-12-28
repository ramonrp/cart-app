import { useCart } from "../../context/CartContext";
import GalleryItem from "./GalleryItem/GalleryItem";
const FilteredList = ({ searchTerm }) => {
  const { cart } = useCart();
  let filteredCart = cart;
  if (searchTerm) {
    filteredCart = cart.filter((item) => item.category === searchTerm);
  }

  const filteredItems = filteredCart.map((item) => (
    <GalleryItem key={item.id} {...item} />
  ));

  return <div>{filteredItems}</div>;
};

export default FilteredList;
