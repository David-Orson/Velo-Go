import React from "react";
import { Router } from "@reach/router";

import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
      </Router>
    </Provider>
  );
};

export default App;
