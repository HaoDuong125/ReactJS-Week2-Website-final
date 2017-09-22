import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Category from "./pages/Category";
import Product from "./pages/Product";
import Layout from "./pages/Layout";
import User from "./pages/User";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Product}></IndexRoute>
      <Route path="category(/:article)" name="category" component={Category}></Route>
      <Route path="user" name="user" component={User}></Route>
    </Route>
  </Router>,
app);