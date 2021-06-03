import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/app/App";
import Detail from "../components/detail/Detail";
import Cart from "../components/cart/Cart";
import SearchResult from "../components/searchResult/SearchResult";
import Account from "../components/account/Account";
import Wrapper from '../components/wrapper/Wrapper';
import Category from '../components/category/Category';
import Checkout from "../components/checkout/Checkout";

const AppRouter = () => (
  <BrowserRouter>
    <Wrapper>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route path="/search/:keywords" component={SearchResult}/>
        <Route path="/account" component={Account}/>
        <Route path="/checkout" component={Checkout} />
        <Route path="/category/:type" component={Category}/>
      </Switch>
    </Wrapper>
  </BrowserRouter>
);

export default AppRouter;
