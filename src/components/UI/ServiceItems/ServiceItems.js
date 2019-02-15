import React from "react";
import ServiceItem from "./ServiceItem/ServiceItem";

const serviceItems = props => (
  <div
    style={{
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F2FBFD",
      padding: "50px 0px"
    }}
  >
    <ServiceItem type="Immigration meetings" />
    <ServiceItem type="VISA application" />
    <ServiceItem type="Sponsorship letter" />
    <ServiceItem type="Home assistant" />
    <ServiceItem type="Finding housing" />
    <ServiceItem type="Documents" />
    <div>{props.children}</div>
  </div>
);

export default serviceItems;
