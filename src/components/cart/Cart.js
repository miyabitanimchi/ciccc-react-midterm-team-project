import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";

const Cart = () => {
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);
  console.log(productsAddedToCart);

  // if user removes some of item in cart
  // **this doesn't affect localStorage yet**
  const getNewAddedProductsArr = (id) => {
    const newAddedProductsArr = productsAddedToCart.filter(
      (product) => product.product[0].id !== id
    );
    setProductsAddedToCart(newAddedProductsArr);
    console.log("this is parent");
  };

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
    <main className="cart-container">
      {productsAddedToCart.map((product) => (
        <CartItem
          key={product.product[0].id}
          {...product}
          // ** Need to rename this **
          handleFunc={getNewAddedProductsArr}
        />
      ))}
      <div className="checkout-wrap">
        <p className="total-price">
          Total Price: $
          {productsAddedToCart.reduce((acc, productObj) => {
            return acc + productObj.product[0].price;
          }, 0)}
        </p>
        <button className="checkout-btn">Checkout</button>
        <button className="continue-shop-btn">Continue Shopping</button>
      </div>
    </main>
  );
};

export default Cart;
