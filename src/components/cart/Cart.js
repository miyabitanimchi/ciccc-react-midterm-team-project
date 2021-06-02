import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
import { useAuthContext } from "../../context/auth-context";

const Cart = () => {
  const { user } = useAuthContext();
  console.log(user);
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);
  console.log(productsAddedToCart);

  // if user removes some of item in cart
  const getNewAddedProductsArr = (id) => {
    const newAddedProductsArr = productsAddedToCart.filter(
      (product) => product.product[0].id !== id
    );
    setProductsAddedToCart(newAddedProductsArr);
    // remove current array in localStorage
    localStorage.removeItem(user.uid);
    // set new array in localStorage
    localStorage.setItem(user.uid, JSON.stringify(newAddedProductsArr));

    console.log("this is parent");
  };

  const getProductsArrInLocalStorage = () => {
    if (localStorage.getItem(user.uid) !== null) {
      setProductsAddedToCart(JSON.parse(localStorage.getItem(user.uid)));
    }
  };

  useEffect(() => {
    user && getProductsArrInLocalStorage();
  }, []);

  console.log(productsAddedToCart);
  return (
    <main className="cart-container">
      {productsAddedToCart.map((product) => (
        <CartItem
          key={product.product[0].id}
          {...product}
          // **** Need to rename this ****
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
