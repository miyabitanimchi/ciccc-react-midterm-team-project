import React, { useState, useEffect } from "react";
import { useProductsContext } from "../../context/products-context";
import { useAuthContext } from "../../context/auth-context";
import { v4 as uuidv4 } from "uuid";
import "./Checkout.scss";

const Checkout = () => {
  const { products } = useProductsContext();
  const { user } = useAuthContext();

  return (
    <main className="checkout-process-container">
      <h1>Checkout</h1>
      <div className="address-container">
        <h2>1. Register an address</h2>
        <div className="address-fillout-wrap">
          <div>
            <label htmlFor="first-name">First Name: </label>
            <input type="text" name="first-name" id="first-name" />
          </div>
          <div>
            <label htmlFor="last-name">First Name: </label>
            <input type="text" name="last-name" id="last-name" />
          </div>
          <div>
            <label htmlFor="street-address">Street Address: </label>
            <input type="text" name="street-address" id="street-address" />
          </div>
          <div>
            <label htmlFor="address-details">Address Details: </label>
            <input type="text" name="address-details" id="address-details" />
          </div>
          <div>
            <label htmlFor="city">City: </label>
            <input type="text" name="city" id="city" />
          </div>
          <div>
            <label htmlFor="province-territory">Province / Territory: </label>
            <input
              type="text"
              address="province-territory"
              id="province-territory"
            />
          </div>
          <div>
            <label htmlFor="postal-code">Postal Code: </label>
            <input type="text" name="postal-code" id="postal-code" />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input type="text" name="phone" id="phone" />
          </div>
        </div>
      </div>
      <div className="payment-option-container">
        <h2>2. Payment Option</h2>
        <div className="payment-option-wrap">
          <div>
            <input type="radio" name="credit-card" id="credit-card" />
            <label htmlFor="credit-card"> Credit Card</label>
          </div>
          <div>
            <input type="radio" name="paypal" id="paypal" />
            <label htmlFor="cpaypal"> PayPal</label>
          </div>
        </div>
        <h3>Register a credit card information</h3>
        <div className="credit-fillout-wrap">
          <div>
            <label htmlFor="card-number">Credit Card Number: </label>
            <input type="text" name="card-number" id="card-number" />
          </div>
          <div>
            <label htmlFor="expiration-date">Expiration Date: </label>
            <input type="text" name="expiration-date" id="expiration-date" />
          </div>
          <div>
            <label htmlFor="cvv-number">CVV Number: </label>
            <input type="text" name="cvv-number" id="cvv-number" />
          </div>
          <div>
            <label htmlFor="full-name">Full Name: </label>
            <input type="text" name="full-name" id="full-name" />
          </div>
        </div>
      </div>
      <div className="order-summary-container">
        <h2>Order Summary</h2>
      </div>
    </main>
  );
};

export default Checkout;
