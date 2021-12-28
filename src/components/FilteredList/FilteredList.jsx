import { useCart } from "../../context/CartContext";
import GalleryItem from "./GalleryItem/GalleryItem";
import styles from "./filteredlist.module.css";
import { imgData } from "../../data/imgData";
const FilteredList = ({ searchTerm }) => {
  const { cart } = useCart();
  let filteredCart = imgData.map((item) => {
    if (cart.includes(item.id)) item.selected = true;
    else item.selected = false;
    return item;
  });
  if (searchTerm) {
    filteredCart = filteredCart.filter((item) => item.category === searchTerm);
  }

  const filteredItems = filteredCart.map((item) => (
    <GalleryItem key={item.id} {...item} />
  ));

  return <div className={styles.grid}>{filteredItems}</div>;
};

export default FilteredList;
