import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CardContextProvider({ children }) {
  // check if localStorage is available
  const ls = typeof window !== "undefined" ? localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  // Save cartProducts to localStorage
  useEffect(() => {
    if (cartProducts.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  // Get cartProducts from localStorage
  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function addProductToCart(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProductFromCart(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
