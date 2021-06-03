import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/app/App";
import Detail from "../components/detail/Detail";
import Cart from "../components/cart/Cart";
import { useAuthContext } from "../context/auth-context";
import SearchResult from "../components/searchResult/SearchResult";
import Account from "../components/account/Account";
import Wrapper from "../components/wrapper/Wrapper";
// test
import Checkout from "../components/checkout/Checkout";

const AppRouter = () => {
  const { user } = useAuthContext();
  useEffect(() => {
    user && console.log(`Hello, ${user.displayName}!`);
    // user && console.log(user);
  }, [user]);

  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="/search/:keywords" component={SearchResult} />
          <Route path="/account" component={Account} />
          {/* test */}
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default AppRouter;
