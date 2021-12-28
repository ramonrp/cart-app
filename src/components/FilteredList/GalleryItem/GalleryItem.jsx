import { useCart } from "../../../context/CartContext";
const GalleryItem = ({ pictureUrl, title, selected, id }) => {
  const { handleChange } = useCart();
  return (
    <article>
      <div>
        <img src={pictureUrl} alt={title}></img>
      </div>
      <p>{title}</p>
      <input
        onChange={() => handleChange(id)}
        checked={selected}
        type="checkbox"
      ></input>
      <label>Buy</label>
    </article>
  );
};

export default GalleryItem;
