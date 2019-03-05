import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Landing} />
  </Router>
);

export default AppRouter;
