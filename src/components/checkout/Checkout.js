import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../context/auth-context";
import database from "../../firebase/firebase";
import "./Checkout.scss";

const Checkout = () => {
  const { user } = useAuthContext();

  const [productsAddedToCart, setProductsAddedToCart] = useState([]);
  const [subtotalOfProducts, setSubtotalOfProducts] = useState(0);
  const [shippingCost, setShippingCost] = useState(9.9);

  const getProductsArrInLocalStorage = () => {
    if (user) {
      setProductsAddedToCart(JSON.parse(localStorage.getItem(user.uid)));
    } else {
      setProductsAddedToCart([]);
    }
  };

  const calculateSubtotalOfProducts = () => {
    if (user && productsAddedToCart) {
      const subtotalOfProducts = productsAddedToCart.reduce(
        (acc, productObj) => {
          return Number(acc) + Number(productObj.subTotal);
        },
        0
      );
      // console.log(typeof subtotalOfProducts);
      setSubtotalOfProducts(subtotalOfProducts);
    }
  };

  useEffect(() => {
    productsAddedToCart.length !== 0 && calculateSubtotalOfProducts();
  }, [productsAddedToCart]);

  useEffect(() => {
    user && getProductsArrInLocalStorage();
  }, [user]);

  return (
    <>
      <h1>Checkout</h1>
      <main className="checkout-container">
        {productsAddedToCart ? (
          <>
            <div className="address-payment-container">
              <div className="address-container">
                <h2 className="register-address-title">
                  1. Register an address
                </h2>
                <div className="address-fillout-wrap">
                  <div className="input-wrap">
                    <label htmlFor="first-name">First Name: </label>
                    <input
                      className="input"
                      type="text"
                      name="first-name"
                      id="first-name"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="last-name">First Name: </label>
                    <input
                      className="input"
                      type="text"
                      name="last-name"
                      id="last-name"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="street-address">Street Address: </label>
                    <input
                      className="input"
                      type="text"
                      name="street-address"
                      id="street-address"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="address-details">Address Details: </label>
                    <input
                      className="input"
                      type="text"
                      name="address-details"
                      id="address-details"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="city">City: </label>
                    <input
                      className="input"
                      type="text"
                      name="city"
                      id="city"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="province-territory">
                      Province / Territory:
                    </label>
                    <input
                      className="input"
                      type="text"
                      address="province-territory"
                      id="province-territory"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="postal-code">Postal Code: </label>
                    <input
                      className="input"
                      type="text"
                      name="postal-code"
                      id="postal-code"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="phone">Phone: </label>
                    <input
                      className="input"
                      type="text"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>
              </div>
              <div className="payment-container">
                <h2 className="payment-option-title">2. Payment Option</h2>
                <div className="payment-option-wrap">
                  <div className="payment-option">
                    <input type="radio" name="credit-card" id="credit-card" />
                    <label htmlFor="credit-card"> Credit Card</label>
                  </div>
                  <div className="payment-option">
                    <input type="radio" name="paypal" id="paypal" />
                    <label htmlFor="cpaypal"> PayPal</label>
                  </div>
                </div>
                <div className="credit-fillout-wrap">
                  <h3>Register a credit card information</h3>
                  <div className="input-wrap">
                    <label htmlFor="card-number">Credit Card Number: </label>
                    <input
                      className="input"
                      type="text"
                      name="card-number"
                      id="card-number"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="expiration-date">Expiration Date: </label>
                    <input
                      className="input"
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="cvv-number">CVV Number: </label>
                    <input
                      className="input"
                      type="text"
                      name="cvv-number"
                      id="cvv-number"
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="full-name">Full Name: </label>
                    <input
                      className="input"
                      type="text"
                      name="full-name"
                      id="full-name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-summary-container">
              <div className="order-summary-wrap">
                <div className="price-summary-wrap">
                  <h2 className="order-summary-title">
                    Order Summary |
                    <span> {productsAddedToCart.length} Item(s)</span>
                  </h2>
                  <div className="price-wrap">
                    <p className="summary-label">Item(s) subtotal: </p>
                    <p className="summary-price">
                      CAD ${subtotalOfProducts.toFixed(2)}
                    </p>
                  </div>
                  <div className="price-wrap">
                    <p className="summary-label">Shipping: </p>
                    <p className="summary-price">
                      CAD $ {shippingCost.toFixed(2)}
                    </p>
                  </div>
                  <div className="price-wrap">
                    <p className="summary-label subtotal">Subtotal: </p>
                    <p className="summary-price subtotal">
                      CAD $ {(subtotalOfProducts + shippingCost).toFixed(2)}
                    </p>
                  </div>
                  <div className="price-wrap">
                    <p className="summary-label">Estimated Tax: </p>
                    <p className="summary-price">
                      CAD $
                      {(
                        Math.round(
                          (subtotalOfProducts + shippingCost) * 0.1 * 10
                        ) / 10
                      ).toFixed(2)}
                    </p>
                  </div>
                  <div className="price-wrap order-total-wrap">
                    <h3 className="summary-label">Order Total: </h3>
                    <h3 className="summary-price">
                      CAD $
                      {(
                        subtotalOfProducts +
                        shippingCost +
                        Math.round(
                          (subtotalOfProducts + shippingCost) * 0.1 * 10
                        ) /
                        10
                      ).toFixed(2)}
                    </h3>
                  </div>
                </div>
                <div className="products-summary-wrap">
                  {productsAddedToCart.map((product) => (
                    <div key={product.productUid}>
                      <img
                        src={product.product[0].image}
                        alt={product.product[0].title}
                      />
                      <p className="quantity">× {product.quantity}</p>
                    </div>
                  ))}
                </div>
                <button className="place-prder-btn">Place Order </button>
              </div>
            </div>
          </>
        ) : (
            <>
              <h1>No checkout information to show</h1>
            </>
          )}
      </main>
    </>
  );
};

export default Checkout;
