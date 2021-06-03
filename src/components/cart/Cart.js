import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
import { useAuthContext } from "../../context/auth-context";
// temporary component
import PleaseLogin from "./PleaseLogin";

const Cart = () => {
  const { user } = useAuthContext();
  console.log(user);
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);

  // if user removes some of item in cart
  const getNewAddedProductsArr = (id) => {
    const newAddedProductsArr = productsAddedToCart.filter(
      (product) => product.productUid !== id
    );
    setProductsAddedToCart(newAddedProductsArr);
    // remove current array in localStorage
    localStorage.removeItem(user.uid);
    // set new array in localStorage
    localStorage.setItem(user.uid, JSON.stringify(newAddedProductsArr));

    console.log("this is parent");
  };

  const getProductsArrInLocalStorage = () => {
    if (user) {
      user &&
        setProductsAddedToCart(JSON.parse(localStorage.getItem(user.uid)));
    } else {
      setProductsAddedToCart(JSON.parse(localStorage.getItem("unknown")));
    }
  };

  useEffect(() => {
    // user &&
    getProductsArrInLocalStorage();
    console.log("this is render");
  }, []); // before ... user

  console.log(productsAddedToCart);
  return (
    <>
      {productsAddedToCart ? (
        <main className="cart-container">
          {productsAddedToCart.map((product) => (
            <CartItem
              key={product.productUid}
              {...product}
              // **** Need to rename this ****
              handleFunc={getNewAddedProductsArr}
            />
          ))}
          <div className="checkout-wrap">
            <p className="total-price">
              Total Price: $
              {productsAddedToCart.reduce((acc, productObj) => {
                return acc + productObj.subTotal;
              }, 0)}
            </p>
            <button className="checkout-btn">Checkout</button>
            <button className="continue-shop-btn">Continue Shopping</button>
          </div>
        </main>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default Cart;
