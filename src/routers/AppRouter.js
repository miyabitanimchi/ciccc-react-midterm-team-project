import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/app/App";
import Detail from "../components/detail/Detail";
import Cart from "../components/cart/Cart";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useAuthContext } from "../context/auth-context";

const AppRouter = () => {
  const { user } = useAuthContext();
  useEffect(() => {
    user && console.log(`Hello, ${user.displayName}!`);
  }, [user]);

  return (
    <BrowserRouter>
      <Header />
    <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
};

export default AppRouter;
