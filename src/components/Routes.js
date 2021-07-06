import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import Navbar from './Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
