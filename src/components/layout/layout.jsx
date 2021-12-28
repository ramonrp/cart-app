import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import styles from "./layout.module.css";
const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
