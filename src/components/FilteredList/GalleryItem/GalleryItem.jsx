import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
      <FormControlLabel
        label="buy"
        control={
          <Checkbox
            color="primary"
            checked={selected}
            onChange={(e) => handleChange(e, id)}
          ></Checkbox>
        }
      ></FormControlLabel>
    </article>
  );
};

export default GalleryItem;
