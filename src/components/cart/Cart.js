import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
import { useAuthContext } from "../../context/auth-context";
import database from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products-context";

const Cart = () => {
  const { user } = useAuthContext();
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);
  const { cartItems, dispatchCartItems } = useProductsContext();

  // const getProductsArrInLocalStorage = () => {
  //   if (localStorage.hasOwnProperty("unknown")) {
  //     setProductsAddedToCart(cartItems);
  //   }
  // };

  // if user removes some of item in cart
  const getNewAddedProductsArr = (id) => {
    // const newAddedProductsArr = productsAddedToCart.filter(
    //   (product) => product.productUid !== id
    // );
    // setProductsAddedToCart(newAddedProductsArr);
    // if (user) {
    //   localStorage.removeItem(user.uid);
    //   localStorage.setItem(user.uid, JSON.stringify(newAddedProductsArr));
    // } else {
    //   localStorage.removeItem("unknown");
    //   localStorage.setItem("unknown", JSON.stringify(newAddedProductsArr));
    // }
    if (user) {
      database
        .ref(`users/${user.uid}/cart/${id}`)
        .remove()
        .then(() => {
          dispatchCartItems({
            type: "REMOVE_FIREBASE_ITEM",
            firebaseId: id,
          });
        });
    } else {
      dispatchCartItems({
        type: "REMOVE_LOCALSTORAGE_ITEM",
        productUid: id,
      });
    }
  };

  // useEffect(() => {
  //   getProductsArrInLocalStorage();
  // }, [user]);

  return (
    <>
      {cartItems.length !== 0 ? (
        <main className="cart-container">
          {cartItems.map((product) => (
            <CartItem
              key={product.productUid}
              {...product}
              getNewAddedProductsArr={getNewAddedProductsArr}
            />
          ))}
          <div className="checkout-wrap">
            <p className="total-price">
              Total Price: $
              {cartItems
                .reduce((acc, productObj) => {
                  return Number(acc) + Number(productObj.subTotal);
                }, 0)
                .toFixed(2)}
            </p>
            <Link to={"/checkout/"} className="checkout-btn">
              Checkout
            </Link>
            <Link to={"/"} className="continue-shop-btn">
              Continue Shopping
            </Link>
          </div>
        </main>
      ) : (
        <main className="no-item-container">
          <div className="no-item-notice-wrap">
            <h1 className="no-item-notice">No Items in Cart.</h1>
            <Link to={"/"}>Go Back to Main Page</Link>
          </div>
        </main>
      )}
    </>
  );
};

export default Cart;
