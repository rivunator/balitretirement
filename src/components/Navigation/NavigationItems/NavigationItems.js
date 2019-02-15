import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = () => (
  <BrowserRouter>
    <div className="menu" style={classes}>
      <NavigationItem title="Home" active />
      <NavigationItem title="Cost of living" />
      <NavigationItem title="How to apply" />
      <NavigationItem title="Contact" />
    </div>
  </BrowserRouter>
);

export default navigationItems;
