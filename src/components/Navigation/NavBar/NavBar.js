import React from "react";
import classes from "./NavBar.css";

import Logo from "../../../assets/img/bali-logo.png";
import NavigationItems from "../NavigationItems/NavigationItems";

const navBar = () => (
  <nav style={classes}>
    <img src={Logo} style={{ float: "left", height: "20px" }} />
    <NavigationItems />
  </nav>
);

export default navBar;
