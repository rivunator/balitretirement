import React from "react";
import classes from "./NavBar.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const navBar = () => (
  <nav style={classes}>
    <Logo />
    <NavigationItems />
  </nav>
);

export default navBar;
