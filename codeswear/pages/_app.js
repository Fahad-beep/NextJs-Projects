import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const [cart, setcart] = useState({});
  const [subTotal, setsubTotal] = useState(0);
  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    let subt = 0;
    let keys = Object.keys(newCart);
    for (let i = 0; i < keys.length; i++) {
      subt += newCart[keys[i]].price * newCart[keys[i]].qty;
    }
    setsubTotal(subt);
  };
  const addToCart = (qty, name, price, varient, size, itemCode) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty + 1;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varient };
    }
    setcart(newCart);
    saveCart(newCart);
  };
  const removeFromCart = (itemCode) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty - 1;
    }
    if (newCart[itemCode].qty <= 0) delete newCart[itemCode];
    setcart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setcart({});
    saveCart({});
  };

  return (
    <>
      <NavBar
        key={subTotal}
        clearCart={clearCart}
        saveCart={saveCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
        subTotal={subTotal}
      />
      <Component
        clearCart={clearCart}
        saveCart={saveCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
