import React from "react";

const itemStyle = {
  width: "300px",
  height: "45px",
  flexFlow: "row",
  webkitBoxShadow: "-2px 6px 19px 0px rgba(5,11,191,0.16)",
  mozBoxShadow: "-2px 6px 19px 0px rgba(5,11,191,0.16)",
  boxShadow: "-2px 6px 19px 0px rgba(5,11,191,0.16)",
  margin: "50px 0px 50px 15px"
};

const serviceItem = props => (
  <div style={itemStyle}>
    <span>i{props.icon}</span>
    <span>service{props.service}</span>
  </div>
);

export default serviceItem;
