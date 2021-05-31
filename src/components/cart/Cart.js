import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);

  const getProductsArrInLocalStorage = () => {
    if (localStorage.getItem("addedProductsArr") !== null) {
      setProductsAddedToCart(
        JSON.parse(localStorage.getItem("addedProductsArr"))
      );
    }
  };

  useEffect(() => {
    getProductsArrInLocalStorage();
  }, []);

  console.log(productsAddedToCart);
  return (
    <>
      {productsAddedToCart.map((product) => (
        <CartItem key={product.product[0].id} {...product} />
      ))}
    </>
  );
};

export default Cart;
