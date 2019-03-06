import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import LearnMore from './LearnMore';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path='/about-us' exact component={LearnMore} />
    </Switch>
  </Router>
);

export default AppRouter;
