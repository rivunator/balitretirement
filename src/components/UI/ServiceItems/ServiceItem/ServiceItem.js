import React from "react";
import immigrationIcon from "../../../../assets/img/icons/services/immigration.png";

const itemStyle = {
  flexBasis: "25%",
  height: "50px",
  webkitBoxShadow: "-2px 6px 19px 0px rgba(5,11,191,0.1)",
  mozBoxShadow: "-2px 6px 19px 0px rgba(5,11,191,0.1)",
  boxShadow: "-2px 6px 19px 0px rgba(5,11,191,0.1)",
  margin: "10px",
  boxSizing: "border-box"
};

const serviceItem = props => (
  <div style={itemStyle}>
    <span style={{ justifyContent: "left" }}>
      <img src={immigrationIcon} style={{ height: "25px" }} alt="officer" />
    </span>
    <span>
      <strong>{props.type}</strong>
    </span>
  </div>
);

export default serviceItem;
