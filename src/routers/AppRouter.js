import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/App";
import Detail from "../components/detail/Detail";
import Cart from "../components/cart/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/cart" component={Cart} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
