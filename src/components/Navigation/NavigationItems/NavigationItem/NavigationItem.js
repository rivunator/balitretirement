import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.css";

const navigationItem = props => (
  <NavLink to="/" activeClassName="is-active">
    {props.title}
  </NavLink>
);

export default navigationItem;
