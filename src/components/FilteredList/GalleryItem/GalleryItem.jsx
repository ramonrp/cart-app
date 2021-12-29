import { useCart } from "../../../context/CartContext";
import styles from "./galleryitem.module.css";
const GalleryItem = ({ pictureUrl, title, selected, id }) => {
  const { handleChange } = useCart();
  return (
    <article className={styles.wrapper}>
      <div>
        <img src={pictureUrl} alt={title}></img>
      </div>
      <p>{title}</p>
      <input
        onChange={(e) => handleChange(e, id)}
        checked={selected}
        type="checkbox"
      ></input>
      <label>Buy</label>
    </article>
  );
};

export default GalleryItem;
