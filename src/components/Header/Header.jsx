import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Animal Gallery Picture</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/cats">Cats</Link>
          </li>
          <li>
            <Link to="/dogs">Dogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
