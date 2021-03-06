import React from "react";
import { Route, Switch } from "react-router-dom";

import DashboardScreen from "../screens/DashboardScreen";
import TestsScreen from "../screens/TestsScreen";
import TestDetailsScreen from "../screens/TestDetailsScreen";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={DashboardScreen} />
      <Route path="/tests" component={TestsScreen} />
      <Route path="/test/:id" component={TestDetailsScreen} />
    </Switch>
  );
};

export default Routes;
