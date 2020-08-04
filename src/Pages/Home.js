import React from "react";
import { Link } from "@reach/router";

import Logo from "../Assets/VeloGoBlack.png";

const Home = () => {
  return (
    <div className="ui container">
      <img src={Logo} alt="Velo Go" />
      <Link to="/dashboard" className="ui button blue">
        Begin
      </Link>
    </div>
  );
};

export default Home;
