import React from 'react'
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home" component={Calculator} />
        <Route exact path="/home" component={Quote} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;