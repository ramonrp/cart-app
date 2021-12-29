import { useState } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { CartProvider } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import Gallery from "../Gallery/Gallery";
import styles from "./main.module.css";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "25px",
    right: "25px",
  },
});
const Main = () => {
  const [showCart, setShowCart] = useState(false);
  const close = () => setShowCart(false);
  const open = () => setShowCart(true);
  const stylesUI = useStyles();
  return (
    <>
      {!showCart && (
        <Fab
          onClick={open}
          color="primary"
          aria-label="cart"
          className={stylesUI.root}
        ></Fab>
      )}
      <main>
        <CartProvider>
          <Gallery />
          <DialogOverlay
            className={styles.dialog}
            isOpen={showCart}
            onDismiss={close}
          >
            <DialogContent className={styles.content} aria-label="cart">
              <Cart onDismiss={close} />
            </DialogContent>
          </DialogOverlay>
        </CartProvider>
      </main>
    </>
  );
};

export default Main;
