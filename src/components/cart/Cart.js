import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
import { useAuthContext } from "../../context/auth-context";
import database from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products-context";

const Cart = () => {
  const { user } = useAuthContext();
  const {
    cartItems,
    dispatchCartItems,
    refreshQuantity,
    saveLocalStorage,
  } = useProductsContext();
  const [totalPrice, setTotalPrice] = useState(0);
  // const [quantity, setQuantity] = useState(cartItems.length);

  // calculate total price
  const calculateTotal = (cartItems) => {
    if (cartItems) {
      const totalPrice = cartItems
        .reduce((acc, productObj) => {
          return Number(acc) + Number(productObj.subTotal);
        }, 0)
        .toFixed(2);
      setTotalPrice(totalPrice);
    }
  };

  // if user removes some of item in cart
  const getNewAddedProductsArr = (id) => {
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
    refreshQuantity(cartItems);
  };

  const handleUpdateQuantity = (newQuantity, id, index) => {
    const newSubTotal = (
      (Math.round(cartItems[index].product[0].price * 10) / 10) *
      newQuantity
    ).toFixed(2);
    const updatedItem = {
      ...cartItems[index],
      quantity: newQuantity,
      subTotal: newSubTotal,
    };
    if (user) {
      console.log({ ...cartItems[index], quantity: newQuantity });
      database
        .ref(`users/${user.uid}/cart`)
        .child(id)
        .update({ quantity: newQuantity, subTotal: newSubTotal })
        .then(() => {
          dispatchCartItems({
            type: "UPDATE_ITEM_QUANTITY",
            updatedItem,
            index,
          });
        });
    } else {
      dispatchCartItems({
        type: "UPDATE_ITEM_QUANTITY",
        updatedItem,
        index,
      });
      saveLocalStorage(cartItems);
    }
    calculateTotal(cartItems);
    refreshQuantity(cartItems);
  };

  useEffect(() => {
    console.log(cartItems);
    calculateTotal(cartItems);
  }, [cartItems]);

  return (
    <>
      {cartItems.length !== 0 ? (
        <main className="cart-container">
          {cartItems.map((product, index) => (
            <CartItem
              key={product.productUid}
              index={index}
              {...product}
              getNewAddedProductsArr={getNewAddedProductsArr}
              user={user}
              handleUpdateQuantity={handleUpdateQuantity}
            />
          ))}
          <div className="checkout-wrap">
            <p className="total-price">Total Price: ${totalPrice}</p>
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
