import { Routes, Route } from "react-router-dom";
import FilteredList from "../FilteredList/FilteredList";
import Checkout from "../Checkout/Checkout";
import styles from "./gallery.module.css";
const Gallery = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FilteredList searchTerm="" />}></Route>
        <Route path="/cats" element={<FilteredList searchTerm="cat" />}></Route>
        <Route path="/dogs" element={<FilteredList searchTerm="dog" />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
};

export default Gallery;
