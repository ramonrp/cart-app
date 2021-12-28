import { useCart } from "../../context/CartContext";
import GalleryItem from "./GalleryItem/GalleryItem";
import styles from "./filteredlist.module.css";
const FilteredList = ({ searchTerm }) => {
  const { cart } = useCart();
  let filteredCart = cart;
  if (searchTerm) {
    filteredCart = cart.filter((item) => item.category === searchTerm);
  }

  const filteredItems = filteredCart.map((item) => (
    <GalleryItem key={item.id} {...item} />
  ));

  return <div className={styles.grid}>{filteredItems}</div>;
};

export default FilteredList;
