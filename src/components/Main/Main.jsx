import { useState } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { CartProvider } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import Gallery from "../Gallery/Gallery";
import styles from "./main.module.css";
const Main = () => {
  const [showCart, setShowCart] = useState(false);
  const close = () => setShowCart(false);
  const open = () => setShowCart(true);
  return (
    <>
      {!showCart && (
        <button className={styles.buttonOpen} onClick={open}>
          Open Cart
        </button>
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
