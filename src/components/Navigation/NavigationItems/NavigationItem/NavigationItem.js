import React from "react";
//import { NavLink } from "react-router-dom";
import "./NavigationItem.scss";

const navigationItem = props => (
  <a href="/" className={props.active ? "active" : null}>
    {props.title}{" "}
  </a>
);
//<NavLink to="/">{props.title}</NavLink>;

export default navigationItem;
