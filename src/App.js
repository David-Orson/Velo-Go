import React from "react";
import { Router } from "@reach/router";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Dashboard path="/dashboard" />
    </Router>
  );
};

export default App;
