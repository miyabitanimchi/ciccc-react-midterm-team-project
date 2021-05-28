import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Detail from '../components/Detail';
import Cart from '../components/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={App} exact={true} />
      <Route path='/detail/:id' component={Detail} />
      <Route path='/cart' component={Cart} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default AppRouter;