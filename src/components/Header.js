import React from "react";
import batmanLogo from "../media/batman-logo.svg";

const Header = () => {
  return (
    <header>
      <img src={batmanLogo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
