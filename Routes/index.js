import React from "react";
import Home from "../src/Components/home";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const CSRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};
export default CSRoute;
