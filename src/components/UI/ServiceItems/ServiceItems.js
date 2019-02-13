import React from "react";
import ServiceItem from "./ServiceItem/ServiceItem";

const serviceItem = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F2FBFD"
    }}
  >
    <ServiceItem />
    <ServiceItem />
    <ServiceItem />
    <ServiceItem />
  </div>
);

export default serviceItem;
