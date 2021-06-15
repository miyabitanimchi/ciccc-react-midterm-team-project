import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import ProductsProvider from "./context/products-context";
import AuthProvider from "./context/auth-context";
import AppRouter from "./routers/AppRouter";
import CartQty from './components/cart/CartQty';
// require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <AuthProvider>
        <CartQty>
          <AppRouter />
        </CartQty>
      </AuthProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
